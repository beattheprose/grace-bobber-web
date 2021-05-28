#!/bin/bash

input_dir="images"

for img in $(fd -e jpg -e jpeg . images/);
do
        jpegoptim --dest="dist/images" \
                --overwrite \
                --all-progressive \
                --strip-all \
                --max=90 \
                --force \
                $img
        jpegoptim --dest="thumbnails" \
                --overwrite \
                --all-progressive \
                --strip-all \
                --size=10% \
                --force \
                $img
done
