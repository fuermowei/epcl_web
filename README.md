# epcl_web
WEB For EPCL
![image](https://github.com/fuermowei/epcl_web/blob/master/images/index.png)

#####################   	 What we do     #########################
*First, after we interact with the background, we will display the relevant dynamics of the classmates in the homepage module, all of our tasks, courses, and information that the system periodically pushes.
![image](https://github.com/fuermowei/epcl_web/blob/master/images/mainpage.png)

*After that, you can click on OJ, this is a simple OJ model, developed entirely by ourselves.
-We will add the user's recent training mode to the homepage in a later version.
![image](https://github.com/fuermowei/epcl_web/blob/master/images/OJmain.png)

-There is a problem information in the background in the list of topics, but it is still very few, but it will continue to increase in the later stage.
![image](https://github.com/fuermowei/epcl_web/blob/master/images/OJproblemlist.png)

-There will be recent code and implementation submitted by the user in the submission record.
![image](https://github.com/fuermowei/epcl_web/blob/master/images/OJproblem.png)

-In the ranking you will see the submissions and specific rankings of users registered with the system.
![image](https://github.com/fuermowei/epcl_web/blob/master/images/OJlogs.png)

-In the log, you can view the code submitted in the past, whether passed or wrong.
![image](https://github.com/fuermowei/epcl_web/blob/master/images/OJloginfo.png)

-Ranking system as mentioned above
![image](https://github.com/fuermowei/epcl_web/blob/master/images/OJRank.png)

*Then there is the Shell interface. In the Shell interface, enter the username, address and port number to link to the remote server.On a specific remote server, you can use our experimental teaching management platform
![image](https://github.com/fuermowei/epcl_web/blob/master/images/Shellpage.png)

-After logging in, you can remotely connect to ssh's web page.
![image](https://github.com/fuermowei/epcl_web/blob/master/images/Shellpageinfo.png)


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
