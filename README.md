# xmas2020
Stuff for xmas 2020 testing can live in here.

## Run instructions
Set up node/npm. Lots of instructions on google for this - on mac it is installed but you might need NVM (node version manager) to avoid version conflicts.

Once node is installed and on your PATH, type the following:
*npm install*

then, to start the project locally:
*npm run watch*

### Script rundown
This will be good enough for most things:
*npm run watch*

Change document google fonts:
*pm run fonts*

Run browser-sync server:
*npm run sync*

Process everything, purge and minify:
*npm run dev*

Process everything, purge and minify while watching for changes:
*npm run watch:dev*

Process everything, purge and minify in PROD:
*npm run prod*