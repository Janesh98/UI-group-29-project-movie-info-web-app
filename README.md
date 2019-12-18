# How to run:


## The website is live at https://paulmcn98.github.io/

### Additionaly you can run a local server

Download all files and cd into the project folder and enter the desired command below.

#### Python 2

``` python -m SimpleHTTPServer ```

#### python 3

``` python -m http.server ```

#### Then visit http://localhost:8000 on your browser.

#### Node

An alternative is node.js http-server. It is much faster than python simple server while requiring a little bit of setup. Just 3 simple steps:

1. Download and Install node.js

2. Open a terminal or command prompt (on Windows you might need to open the command prompt as admin)

3. In the terminal type:

``` npm install -g http-server ```

From then on just cd to the folder that has the files you want to serve and type:

``` http-server ```

#### Then visit http://localhost:8000 on your browser.


#### Alternatively, you can setup a browser-sync server which has the added benefit of automatically reloading the webpage when any changes were saved in the source code.

1. Follow instructions above to install node.js and open a Terminal/Command Prompt window

2. Type:

 ``` npm install -g browser-sync ```
 
3. cd into your project folder.

4. Type

 ``` browser-sync start --server -f -w ```
 
#### Your website should be available at http://localhost:3000 and whenever you save a file in your project, the webpage will automatically reload.