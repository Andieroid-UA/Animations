# Quickstart for a New Angular Setup

**************************************************
**Need to use GitBash when re-downloading files**

**Also need to reinstall NPM when accessing from another computer**

npm install -g @angular/cli@latest

**************************************************

1. Install Angular

    npm install -g @angular/cli@latest

*Make sure you are in the correct folder*
cd documents/github/[myprojectfolder]/Angular/[specificprojectname]

2. Make a new project folder

    ng new [my-first-app] --no-strict

Choose "CSS"

3. Install Bootstrap

    npm install --save bootstrap@5

4. Add Bootstrap to the angular.JSON file

node_modules/bootstrap/dist/css/bootstrap.min

5. Test your webpage

    ng serve

# Quickstart for a New server

*Note: If it says "This command is not available when running the Angular CLI outside a workspace, you might not be in the correct project folder*
*It's the one you JUST generated "my-first-app"*

    ng generate component [name of your component]

OR

    ng g c [name of your component]


    # Quickstart for a New Angular Setup


6. In order to follow along smoothly with the course examples, make sure you install RxJS v6 by running

    npm install --save rxjs@6 

In addition, also install the rxjs-compat package:

    npm install --save rxjs-compat