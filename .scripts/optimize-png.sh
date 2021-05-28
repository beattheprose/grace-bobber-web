#!/bin/bash

input_dir="images"

for img in $( fd -e png . $input_dir );
do
        optipng $img -dir dist/images/ -clobber
        optipng $img -dir thumbnails/ -o 7 -clobber
done
