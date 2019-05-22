# epcl_web
WEB For EPCL
![image](http://github.com/itmyhome2013/readme_add_pic/raw/master/images/nongshalie.jpg)
~~~~~~~~~We have made a multi-module teaching management system.~~~~~~~~~

#####################   	 What we do     #########################

*First, after we interact with the background, we will display the relevant dynamics of the classmates in the homepage module, all of our tasks, courses, and information that the system periodically pushes.

*After that, you can click on OJ, this is a simple OJ model, developed entirely by ourselves.
-We will add the user's recent training mode to the homepage in a later version.
-There is a problem information in the background in the list of topics, but it is still very few, but it will continue to increase in the later stage.
-There will be recent code and implementation submitted by the user in the submission record.
-In the ranking you will see the submissions and specific rankings of users registered with the system.

*Then there is the Shell interface. In the Shell interface, enter the username, address and port number to link to the remote server.On a specific remote server, you can use our experimental teaching management platform

#####################   Interface and implementation statement    #############
*In order to hide our experimental server, we only show one model on the homepage.
-In other words, there is no corresponding server connection in it.
-But we provide some interfaces to help you understand the code.
-<mainpage:doblockLoad>:This function displays the function box in the large box on the right. The parameters are: main frame, ID, name.
-<mainpage:doInfoLoad>:This part is used to create a new message, the parameter is the ID of the small box, the message name
-<mainpage:doInfoStrLoad>:This section shows the string information that should be displayed in the message box. The parameters are the ID of the message box, its own ID, and the string that should be displayed.

*On the OJ page, we made an OJ.html file to help implement the interface functionality.
-In OJ, we use jquery to implement all the functions.
-The code part is implemented by open source codemirror.
-In OJ, you can request access to the address by logging in after the cookie.

*The shell interface is implemented through the open source wssh template. Of course, we have made some improvements to the background.

#####################	Instructions for use #############################

*In places such as the login interface, we have removed the verification limit.
-In other words, if you want to experience it, you can run it directly to experience our project.
-In addition, some ports are also open to users, such as OJ and Shell. If you have a question, or if there is a bug in some places, please contact us.

#####################   Thank you ####################################
