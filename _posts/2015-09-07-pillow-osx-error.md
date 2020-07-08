---
layout: post
title:  "Pillow OSX error"
date:   2015-03-18 17:50:00
tags:
- python
- error
- notes
---

Got an error installing pillow on OS X, error below:

    clang -fno-strict-aliasing -fno-common -dynamic -I/usr/local/include -I/usr/local/opt/sqlite/include -DNDEBUG -g -fwrapv -O3 -Wall -Wstrict-prototypes -I/System/Library/Frameworks/Tcl.framew
    ork/Headers -I/System/Library/Frameworks/Tk.framework/Headers -I/usr/X11/include/freetype2 -IlibImaging -I/usr/X11/include -I/usr/local/include -I/Users/wbarton/code/.virtualenvs/ketchup-pin
    knwhites/include -I/usr/include -I/usr/local/Cellar/python/2.7.8_2/Frameworks/Python.framework/Versions/2.7/include/python2.7 -c _imagingft.c -o build/temp.macosx-10.9-x86_64-2.7/_imagingft.
    
    _imagingft.c:62:10: fatal error: 'freetype/fterrors.h' file not found

    #include <freetype/fterrors.h>

             ^

    1 error generated.

    error: command 'clang' failed with exit status 1

Fixed by symlinking freetype to freetype2 by running:

    ln -s /usr/local/include/freetype2 /usr/local/include/freetype

