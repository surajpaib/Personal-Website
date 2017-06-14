/**
 * Created by suraj on 26/5/17.
 */
  $('#inputfield0').focus();
    var counter = 0;
        window.onkeydown = function (e) {
               var key = e.keyCode ? e.keyCode : e.which;
                if (key == 38) {
                    $('#inputfield' + counter.toString()).val($('#inputfield' + (counter - 1).toString()).val());
                    $('#inputfield' + counter.toString()).focus;
                }
                if( key == 9){

                    if ( get_snippet($('#inputfield'+counter.toString()).val(), 0, 1) == "l"){
                    $('#inputfield'+counter.toString()).val('ls');
                    }
                    else if ( get_snippet($('#inputfield'+counter.toString()).val(), 0, 2) == "cl"){

                        $('#inputfield'+counter.toString()).val('clear');
                    }
                    else if ( get_snippet($('#inputfield'+counter.toString()).val(), 0, 1) == "c"){
                            var val = get_snippet($('#inputfield'+counter.toString()).val(), 4, 5);
                            var val2 = get_snippet($('#inputfield'+counter.toString()).val(), 4, 6);

                            if ( val2.toString() == "ed"){

                                $('#inputfield'+counter.toString()).val('cat education.txt');
                            }
                            else if ( val == "a"){

                                $('#inputfield'+counter.toString()).val('cat achievements.txt');
                            }
                            else if ( val2.toString() == "sk"){

                                $('#inputfield'+counter.toString()).val('cat skills.txt');
                            }
                            else if ( val == "s"){

                                $('#inputfield'+counter.toString()).val('cat samples.git');

                            }
                            else if ( val == "p"){

                                var input = $('#inputfield'+counter.toString());
                                input.focus().val("").blur().focus().val('cat projects.txt');

                            }
                            else if ( val == "e"){

                                $('#inputfield'+counter.toString()).val('cat experience.txt').putCursorAtEnd();
                            }
                            else {

                                $('#inputfield'+counter.toString()).val('cat');
                            }
                    }
                    else if ( get_snippet($('#inputfield'+counter.toString()).val(), 0, 1) == "w"){

                        $('#inputfield'+counter.toString()).val('wget resume.pdf');

                    }

                }
                if (key == 13) {
                    slic = get_snippet($('#inputfield'+counter.toString()).val(), 0, 3);
                    slic2 = get_snippet($('#inputfield'+counter.toString()).val(), 0, 4);

                    if ($('#inputfield'+counter.toString()).val() == "ls") {
                        counter += 1;
                        listitem = '<table id="user-caption"><tbody><tr><td>experience.txt</td><td>education.txt</td><td>achievements.txt</td></tr><tr><td>projects.txt</td><td>samples.git</td><td>skills.txt</td></tr><td>resume.pdf</td><td>hackathons.txt</td></tbody></table><br>';
                        $("#console").append(listitem);
                    }
                    else if ($('#inputfield'+counter.toString()).val() == "help") {
                        counter += 1;
                        listitem = '<p>Type out the following commands in the terminal to find out more, </p><br><table id="user-caption"><tbody><tr><td><span id="sub-headline">ls</span></td><td>Lists files to explore for more information</td></tr><tr><td><span id="sub-headline">cat filename</span></td><td>Displays content of the particular file</td></tr><tr><td><span id="sub-headline">wget resume.pdf</span></td><td>Download resume in .pdf format</td></tr><tr><td><span id="sub-headline">clear</span></td><td>Clear the display</td></tr></tbody></table><br><p> Example:  Type "cat education.txt" to find out more about Surajs education or "cat samples.git" to find out about projects on Github<br>I currently do not support options for the commands! Check back soon for more functionality';
                        $("#console").append(listitem);
                    }
                    else if ($('#inputfield'+counter.toString()).val() == "clear") {
                        counter += 1;
                        document.getElementById('console').innerHTML = '';
                    }
                    else if (slic == "cat") {
                        var final_len = $('#inputfield'+counter.toString()).val().length;
                        filename = get_snippet($('#inputfield'+counter.toString()).val(), 4, final_len);
                        if ( filename.toString() == 'experience.txt' ){
                            var exp1 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline"> Social Innovator, </span></td><td><span id="headline"> Digital Impact Square ( TCS Foundation and MIT Media Labs)</span></td></tr><tr><td>June 2016 - Dec 2016</td></tr></tbody></table><ul><li>Pioneered field research at a school for hearing impaired students and helped develop technology to be used as a teaching aid for sign language which would reduce teaching time by a factor of 2. <br><br><li> Developed automation scripts in Python to extract data from YouTube videos, process subtitles and run NLP on the text data. Also used speech processing libraries to obtain individual word timings.<br><br><li> Met various stakeholders, government officials and private institutions to gain insights from them and improve the product. Discussed with a panel of special educators on what role technology could play in improving lives of the hearing disabled. </ul><br>';
                            var exp2 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline">Research Intern, </span></td><td><span id="headline">Manipal Practice School, Manipal Institute of Technology</span></td></tr><tr><td>Jan 2016 - May 2016</td></tr></tbody></table><ul><li>Developed and tested various optimization algorithms for Supervised Learning ( Mainly MLP, SVMs, Binary MLP, Statistical Classification etc.) to train a Sign Language Classification system. Insights and AUC ROC plots were plotted comparatively offering a clear cut visualization into each algorithms performance.<br><br><li>Used the Microsoft Kinect and software APIs to classify 3 gestures in real time. ( Software used: MATLAB and Kinect Runtime Libraries). My role centered around data cleaning and visualizations along with optimizations. <br><br><li> Met various stakeholders, government officials and private institutions to gain insights from them and improve the product.<br><br><li> Presented the project to a panel of subject experts and researchers and obtained an A+ project rating. </ul>';
                            var exp3 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline">Participant, </span></td><td><span id="headline">Stanford Crowd Course Initiative</span></td></tr><tr><td>2016</td></tr></tbody></table><ul><li>Stanford Crowd Course is an initiative spearheaded by Prof. Sharad Goel, Prof. Amin Saberi and Dr. Rajan Vaish. It facilitates people to collaborate andshare their knowledge with others by creating courses on diverse topics<br><br><li>As a part of this initiative, I contributed content mainly to the course, "Practical Machine Learning with Python" and received #21 Thank yous. ( Thank yous are a way of measuring contributions made to the course in scale.)</ul>';
                            var exp4 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline">Embedded System Developer, </span></td><td><span id="headline">Go-E-Code Technologies</span></td></tr><tr><td>June 2015 - Aug 2015</td></tr></tbody></table><ul><li>My responsibilities as a developer: Developed IoT applications on 8051 and ARM based boards Sensor and Timer based projects</ul>';
                            var desc = exp1 + exp2 + exp3 + exp4;
                            $("#console").append(desc);
                        }
                        else if ( filename.toString() == 'projects.txt'){
                            var proj1 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline">Facebook Messenger Bot Development</span></td></tr></tbody></table><ul><li><strong>Black Adam Bot</strong>: Messenger bot to recognize Music and provide information and similar music and artists ( Similar to Shazam ). Built from scratch using, Django, GraphAPI, ACRCloud API; Link : https://www.messenger.com/t/408061186191970 <br><br><li><strong> First Aid Bot</strong>: Messenger bot to provide daily information about first aid procedures and provide targeted information as well. A comprehensive app for basic first aid knowledge. Powered by Red Cross UK. Built using, Django, GraphAPI, Celery, Wit.ai; Link: https://www.messenger.com/t/1246059572141324 ( WIP ) <br><br><li><strong> Discover Bot</strong>: Messenger bot that helps you discover new places based on local reviews and ratings.</ul>';
                            var proj2 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline"> Tinnitus Project </span></td></tr></tbody></table><ul><li>Developed a tunable multi frequency cancellation device using Phase shifters.<br><br><li> Tested various simulations and lab tested the final design to achieve optimal cancellation</ul>';
                            var proj3 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline"> IlluminAid </span></td></tr></tbody></table><ul><br><br><li>Adapted the liter of light solution to work during the night via addition of a solar battery and led lamps. Demoed the solution at the Beddingudde slum area among the residents<br><br><li> The project won MIT Manipals Innovation Day prize.</ul>';
                            var proj4 = '<br><table class = "cmdline"><tbody><tr><td> <strong><span id="headline">Machine Learning Projects</span></strong> </td></tr></tbody></table><ul><li><strong>k-NN based analysis of different pigmenations in skin images</strong>: Used k-nn to allow a doctor to pick out different ROI in a skin image to provide prognosis for acne treatment etc. based on comparative image analysis<br><br><li><strong>Airplane Crash Data Visualization:</strong> represented crash causes, airline companies associated and time domain analysis of airplane crashes since the beginning of time. Tools used: Tableau, Pandas ​<br><br><li><strong>Kaggle Competitions</strong>: Titanic competition, Cats vs Dogs, Digit Recognition, Leaf Classification<br><br><li><strong>Loan Defaulter Prediction</strong>: HackerEarths Loan Defaulter challenge was solved with 89% accuracy using Gradient Boosting Machines and Random forests by employing Grid Search Cross Validation<br><br><li><strong>Question and Answer Bot</strong>: QA bot was built using distributed bag of words and deep Neural Networks. Predicted answers for test questions with a 80% accuracy. ( Built for Hyphen AI Challenge)<br><br><li><strong>SimPol: US elections predictor</strong>: Takes your stand on about 20 issues. ( From Strongly Disagree, Disagree, Neutral, to strongly Agree) and predicts your chances of winning the US Election based on 2004 and 2008 elections. Used: Pandas, sklearn </ul>';
                            var proj5 = '<br><table class = "cmdline"><tbody><tr><td><span id="headline"> Riddle Bot</span> </td></tr></tbody></table><ul><li>Used a modified BFS algorithm to build a bot that avoids obstacles and collects maximum points<br><br><li> Built on Python without any libraries for Booking.coms challenge</ul>';
                            var proj = proj1 + proj2 + proj3 + proj4 + proj5;
                            $('#console').append(proj);

                        }
                        else if ( filename.toString() == 'education.txt'){
                            var edu1 = '<br><table class = "cmdline"><tbody><tr><td>Bachelor of Technology</td><td>Electronics and Communications</td></tr><tr><td> Manipal Institute of Technology, Manipal University, 2012 - 2016 </td><td> <strong> CGPA: 8.43 </strong></td></tr></tbody></table><br><p>Obtained the SAGES scholarship with a rank of 640 in the Entrance exam and retained the scholarship for all 4 years of study</p><br><br><strong>Societies and Activities : </strong><br><ul><li> AIESEC Incoming Exchange Committee <li> AIESEC Finance and Exchange Development Team<li>AIESEC Information Management Team</ul>';
                            var edu2 = '<br><p><strong>Volunteer Experience :  Teaching Assistant at San Zhao Elementary School, Sichuan, China</strong></p><p>Volunteered for a Cultural Exchange with Renmin University to promote community development. As a exchange volunteer, I was assigned the followingroles: Teaching assistant and course curator for a class of 50 children in the fifth grade. Course Curriculum Design Conducted classes for Basic communication skills in English, Inter-cultural awareness.</p>';
                            var edu = edu1 + edu2;
                            $('#console').append(edu);
                        }
                        else if ( filename.toString() == 'samples.git'){
                            var git1 = '<br><ul> <strong> Black Adam Bot</strong> <li> Music Butler Facebook Bot <li><a href="https://github.com/surajpaib/BlackAdambot">Link to Github</a> </ul>';
                            var git2 = '<br><ul> <strong> Deep-Learning </strong> <li> Siraj Ravals Deep Learning course code <li><a href="https://github.com/surajpaib/Deep-Learning">Link to Github</a> </ul>';
                            var git3 = '<br><ul> <strong> Hyphen-AI Challenge </strong> <li> Recruitment Challenge for Hyphen AI <li><a href="https://github.com/surajpaib/Hyphen-AI-Challenge">Link to Github</a></ul>';
                            var git4 = '<br><ul> <strong> Pokemon-Go Map </strong> <li> Live visualization of all the pokemon in your area... and more! <li><a href="https://github.com/surajpaib/PokemonGo-Map">Link to Github</a></ul>';
                            var git5 = '<br><ul> <strong> riddleBot </strong> <li> Bot Code for Hack Man, Booking.com <li><a href="https://github.com/surajpaib/riddleBot">Link to Github</a></ul>';
                            var git6 = '<br><br> <strong>Visit full Github profile here: <a href="https://github.com/surajpaib">https://github.com/surajpaib</a></strong>';
                            var git = git1 + git2 + git3 + git4 + git5 + git6;
                            $('#console').append(git);
                        }
                         else if ( filename.toString() == 'skills.txt'){
                            var skills= '<br/><table class= "cmdline"><tbody><strong><tr><td><ul><li>Machine Learning <li> NLP <li>Data Analysis with Python <li> Visualization with Tableau <li> AWS <li> Heroku <li> Chatbot Development </ul><td><ul><li> Back-end with Django and Flask <li> API.ai <li> Wit.ai <li> Graphic Design with Illustrator and Photoshop<li> Keras, Sklearn</ul></td></tr></tbody></table></strong>';
                            $('#console').append(skills);
                        }
                         else if ( filename.toString() == 'achievements.txt'){
                            var ach1 = '<br><strong> Innovation Prize Winner at Innovation Day, MIT, Manipal, 2015 </strong><p>A low cost lighting and rain water harvesting system concept and prototype won us the first prize at Innovation Day. This concept would help slum dwellers capitalize on the resources readily available to them at a minimal cost.</p>';
                            var ach2 = '<br><strong>Speaker at MIT Conclave</strong><p>Speaker at the MIT Conclave Conference addressing aspiring entrepreneurs on Social Innovation and creating an impact on communities. </p>'
                            $('#console').append(ach1 + ach2);
                        }
                        else if ( filename.toString() == 'courses.txt'){
                            var course = '<br><ul>Undergraduate Courses<li>Soft Computing Technologies<li> Linux and Shell Scripting <li> Digital Signal Processing<li> Information Theory</ul><ul>Online Courses<li>Machine Learning by Andrew Ng<li>Deep Learning by Google<li> Foundations of Deep Learning ( Udacity )<li> IoT Engineering by Encypher Technologies​</ul>';
                            $('#console').append(course);
                        }
                        else if ( filename.toString() == 'hackathons.txt'){
                            var hac1 = '<br><strong><span id="sub-headline"> Haptiks Botathon, December 2016 </span></strong><p>Participated as a team of two and built "LaunchBot", a facebook messenger bot that lets users create landing pages for their bots or mobile apps in under a minute with levels of customization. <br> I worked mostly with the NLP and business flows of the bot. Tools used: API.ai, Django </p>';
                            var hac2 = '<br><strong><span id="sub-headline"> AngelHack Global Series Bangalore, June 2017</span> </strong><p>Participated in a team of 5 and built "HungerHero", a Charity as a Service platform to help organizations give to the society with a miminal cost<br> I took complete charge of the chatbot interface and interactions with the delivery backend. Tools used: Graph API, Django <br>Link to project: http://www.hackathon.io/projects/15692</p>'
                            $('#console').append(hac1 + hac2);
                        }
                        else {
                            $('#console').append('<br> Error: Invalid filename "'+ filename.toString() +'" attached to "cat" command');

                        }

                        counter += 1;
                }
                else if ( slic2 == "wget"){
                        var final_len1 = $('#inputfield'+counter.toString()).val().length;
                        filename = get_snippet($('#inputfield'+counter.toString()).val(), 5, final_len1);
                        if (filename.toString() == "resume.pdf"){
                            var link = document.createElement('a');
                            link.href = 'https://www.pdf-archive.com/2017/06/05/resume-1-1/resume-1-1.pdf';
                            link.download = 'SurajPaiCV.pdf';
                            link.click();
                        }
                        else{
                            $('#console').append('Error: Invalid filename "'+ filename.toString() +'" with the "wget" command.');
                        }
                        counter += 1;

                    }
                else {
                    error = "       Error: command  '" + $('#inputfield'+counter.toString()).val() + "' is not recognized. Please re-enter a valid command or type 'help' to view list of commands";
                    $("#console").append(error.toString());
                    $('#inputfield'+counter.toString()).remove();

                }
                cmdhead = '<table class="inputtable"><tbody><tr><td><div id="a">surajpai@root:</div></td><td class="inputtd"><input id="inputfield' + counter.toString() + '" name="q" type="text" class="cmdline" autocomplete="off" value:""/></td></tr></tbody></table>';
                $("#console").append(cmdhead);

            }
            $('#inputfield'+counter.toString()).focus();

        }

    function get_snippet(text, l1, l2) {
        var slic = text.toString().slice(l1, l2);
        return slic
    }
