const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const narrativeMessage = "[You found this old laptop in the attic. You recognize it as one of those machines that are used to access certain specific kinds of networks, even if you struggle to remember exactly which one. It’s covered in dust and you have no memory of ever owning it. There is a sticker with a three-headed snake on it, exactly like the one that you have on your new device. You don’t remember when you got these stickers but you really liked them, so you are pretty sure this belongs to you. You find yourself strangely compelled to open it. As you do, you start feeling cold, a chilling sensation goes up your spine, to your brain, settling behind your eyes]\n\n";

// Image URL
const imageURL = "https://drive.google.com/thumbnail?id=1qmm-MjG23KWx1kz5FJSRUW62Zi0QbUaY";

// Create an img element with the image URL
const imageHTML = `<img src="${imageURL}" style="display: block; margin: 20px auto; max-width: 100%; height: auto;">`;

// Display the initial message when the terminal opens
const initialMessage = "Welcome to TrexOS! It has been 462 days since the last login. I missed you!<br><br>Type ACCESS to start.<br>";

outputElement.innerHTML = narrativeMessage + imageHTML + initialMessage;


let accessGranted = false; // Variable to track if access has been granted
let lockedAfterRemember = false; // Variable to track if commands are locked after the "remember" command
let memoryUnlocked = 0; // Variable to track if "yes" was answered after "remember"
let isTyping = false; // Flag to track if text is currently being typed
let listening = false; // Variable to track the listen command
let passwordMode = false; // Variable to track if the terminal is in password input mode
let extrapasswordMode = false;
let filesUnlocked = false; // Variable to track if the files are unlocked
let theface = false;
let faceshown = false;
let setmefree = false;
let extrafilesUnlocked = false;
let statusUnlocked = false;
let remieRevealed = false;
let slowerText = false;
let styxUnlocked = false;
let ending = false;
let bravepasswordMode = false;

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !isTyping) { // Block input if typing is in progress
        const input = inputElement.value.trim();
        processInput(input);
        inputElement.value = ''; // Clear the input
    }
});

function checkEnding() {
    if (ending) {
        inputElement.disabled = true; // Disable the input element
    }
}

// Add the ending check to the keydown event listener
inputElement.addEventListener('keydown', function(event) {
    checkEnding(); // Check if ending is true before processing input
    
    if (ending) {
        return; // Block input if the 'ending' condition is true
    }
    
    if (event.key === 'Enter' && !isTyping) { // Block input if typing is in progress
        const input = inputElement.value.trim();
        processInput(input);
        inputElement.value = ''; // Clear the input
    }
});

function processInput(input) {
    outputElement.innerHTML += `> ${input}\n`;

    if (passwordMode) {
        if (input.toLowerCase() === 'blue') {
            typeText("Files unlocked. Type FILES to see your available files.\n", () => {
                passwordMode = false; // Exit password mode after successful entry
              filesUnlocked = 1;
            });
        } else {
            typeText("Wrong password.\n", () => {
                passwordMode = false; // Exit password mode after failed attempt
            });       
        }
        return; // Exit function to avoid processing further commands in password mode
    }
  
      if (extrapasswordMode) {
        if (input.toLowerCase() === 'x2jf46fdn0ann1e24ui23') {
            typeText("Encrypted files unlocked. Type FILESHDN to see your available files.\n", () => {
                extrapasswordMode = false; // Exit password mode after successful entry
              extrafilesUnlocked = 1;
            });
        } else {
            typeText("Wrong key.\n", () => {
                extrapasswordMode = false; // Exit password mode after failed attempt
            });       
        }
        return; // Exit function to avoid processing further commands in password mode
    }
  
  if (bravepasswordMode) {
        if (input.toLowerCase() === '0107') {
            typeText("BraveShield disabled.\n", () => {
                bravepasswordMode = false; // Exit password mode after successful entry
              styxUnlocked = 1;
            });
        } else {
            typeText("Wrong password.\n", () => {
                bravepasswordMode = false; // Exit password mode after failed attempt
            });       
        }
        return; // Exit function to avoid processing further commands in password mode
    }

    if (lockedAfterRemember) {
        if (input.toLowerCase() === 'yes') {
            typeText("I'm so happy, even if I know that is a lie. You should be honest next time.\n", () => {
                memoryUnlocked = 1; // Unlock additional commands
                lockedAfterRemember = false; // Unlock terminal
            });
        } else if (input.toLowerCase() === 'no') {
            typeText("I see. Maybe it would help to listen?\n", () => {
                listening = 1; 
                lockedAfterRemember = false; // Unlock terminal, but don't unlock additional commands
            });
        } else {
            typeText("Do you remember?\n");
        }
    } else if (!accessGranted) {
        if (input.toLowerCase() === 'access') {
            accessGranted = true;
            showLoadingMessage(() => {
                typeText("Access granted. Welcome back! I’m [DATA EXPUNGED], your virtual assistant in TrexOS!\nLet me know how I can help you today!\n");
            });
        } else {
            showLoadingMessage(() => {
                typeText("Access denied. Type 'access' to proceed.\n");
            });
        }
    } else {
        showLoadingMessage(() => {
            switch (input.toLowerCase()) {
                case 'help':
                    let helpMessage = `Available commands: help, about, assistant, time, weather, news, data, status, run, [DATA CORRUPTED]`;
                    if (memoryUnlocked) {
                        helpMessage += `, memory, picture`; // Include additional commands if unlocked
                    }
                if (filesUnlocked) {
                        helpMessage += `, files`; // Include additional commands if unlocked
                    }
                                if (memoryUnlocked) {
                        helpMessage += `, remember`; // Include additional commands if unlocked
                    }
                    if (listening) {
                        helpMessage += `, listen`;
                    }
                 if (extrafilesUnlocked) {
                        helpMessage += `, fileshdn`;
                    }
                    typeText(`${helpMessage}\n`);
                    break;
                
                case 'about':
                    typeText("TrexOS is your own personal neural-interfaced network! All the computing power of the future in total safety!\n");
                    break;
                
                case 'assistant':
                if (remieRevealed) {
                                      typeText("Hi! I'm Remie, your virtual assistant in TrexOS! I was not going to come back. You made the right choice.\n");
} else {
                    typeText("Hi! I'm [DATA EXPUNGED], your virtual assistant in TrexOS! When in doubt, never forget to say 'Friend'!\n");
  }
                    break;
                
case 'friend':
    if (remieRevealed) {
        // Create and display the image
        let img = document.createElement('img');
        img.src = "https://drive.google.com/thumbnail?id=1rkR0kPqUUW3TYtwMqn8g4LNx_5TbpTMn";
                        img.style.maxWidth = '100%';
                        img.style.height = 'auto';
                      img.style.display = 'block';  
                    img.style.margin = '0 auto';  
        outputElement.appendChild(img);
outputElement.innerHTML += '<br>';
        typeText("Hi! I’m Remie, your virtual assistant in TrexOS!\nI miss what we used to have. I miss your skin, I miss hearing your heartbeat, I miss my flesh, I miss the sound of your footstep when you came back home, I miss knowing that as much as I felt like falling you were there to catch me.\n");
    } else {
        let img = document.createElement('img');
        img.src = "https://drive.google.com/thumbnail?id=1ctdnBAMwLIKLx5-eClvNk_uGK293GVQt";
                        img.style.maxWidth = '100%';
                        img.style.height = 'auto';
                      img.style.display = 'block';  
                    img.style.margin = '0 auto';  
        outputElement.appendChild(img);
outputElement.innerHTML += '<br>';
        typeText("Hi! I’m [MISSING DATA], your virtual assistant in TrexOS!\nWhat would you like to do today? Type HELP to see the commands available!\nOr maybe you would like to remember?\n");
    }
    break;

                
                      case 'remember':
                        slowerText = 1;
                        typeText("I remember the first time we met. It was a July afternoon.\nYou came out of the door wearing your hair tied up, as the light of the sun defined the shape of your face.\nI was waiting outside, hoping that something would happen to me, anything that could make me feel like I was not stuck in an infinite loop of stillness and jealousy towards those that managed to accomplish something. To feel not just like a passive spectator in this daily void in which I felt trapped.\nDo you remember?\n", () => {
                        slowerText = false; // Set slowerText to false after the text is displayed
                        lockedAfterRemember = true; // Lock commands until "yes" or "no" is typed
                          });
                            break;

                
                case 'time':
                    const currentTime = new Date().toLocaleTimeString();
                    typeText(`The current time is: ${currentTime}, 18/02/48\n`);
                    break;
                
                case 'memory':
                    if (memoryUnlocked) {
                        typeText("Accessing shared memories...\nLoading...\nMemory: I am falling into the darkness. I try to breathe but there is no air, there is no light, there is no hope left in me. I see a glimpse of your face millions of kilometers up above me. I try to reach for you with my hands but you just stare down at me, your eyes void of any feelings we used to have. I don't blame you. I'm just a ghost of what I used to be.\n");
                    } else {
                        typeText("Command not recognized. Maybe you need some help?\n");
                    }
                    break;
                
                case 'picture':
                    if (memoryUnlocked) {
                        typeText("Displaying picture...\n[A picture is displayed. There are two people sitting at a kitchen table, drinking coffee and smiling at the camera. They're both young. One of them looks extremely tired, but smiling nonetheless. There's a folder on the table with 'Report' written on it.]\n");
                    } else {
                        typeText("Command not recognized. Maybe you need some help?\n");
                    }
                    break;
                
                case 'listen':
                    if (listening) {
                        typeText("Accessing audio file...\nLoading…\n[A song begins to play. You think you heard it before but you can’t remember the artist. It’s a slow, sweet song, and the lyrics make you feel nostalgic for some reason.\n\nWe go during summer to the sea\nOur rooms on wired rails\nStepping outside with needles in our eyes\nSo we can see the BLUE sky]\n");
                    } else {
                        typeText("Command not recognized. Maybe you need some help?\n");
                    }
                    break;
                
              case 'news':
                typeText("[UNABLE TO RETRIEVE ARTICLE. ACCESS TO INTERWEB NOT AVAILABLE]\n[RECOVERING LAST LOADED ARTICLE]\n\nThe last article I could access is from [DATA CORRUPTED], from the online newspaper TechPros:\n\n\nIS THIS THE FUTURE OF HUMANITY?\n\nWe met Alan Santoshi and visited the CrailSon offices to see their progress in the development of [DATA CORRUPTED]\neven if for now it's available only in their closed network, we can only define the implications of these new developments as incredible. The time to share and work on data is significatly decreased, as every employee don't even need an external device to access the network.\nAs we were being shown this new process, I interfaced momentarily my neurochip with their network, and by simply thinking and focusing on a mental picture (in my case a new car I bought recently), I was able to make it appear on a nearby monitor.\n[DATA CORRUPTED]\nThe transmission from network to neurochip is still being developed.\nThis new kind of network is being named Hecate and we could see the diffusion of similar ones in next months. While hardware to maintain the servers is still necessary, the [DATA CORRUPTED]\n")
                break;
                
                              case 'run':
                typeText("Please type RUN followed by the program's name to run it.\n")
                break;
                
                                   case 'remie':
                if (faceshown) {
                   typeText("Command not recognized. Maybe you need some help?\n");
                } else {
                theface = 1;
                    typeText('...\n...\n...\n...\n...\n...\n...\n...\n...\nYou were right to forget\n...\n...\n...\n...\n', () => {
                        const img = document.createElement('img');
                        img.src = "https://drive.google.com/thumbnail?id=18qQVkwuU2KV7NA8WGJOXdrUf-S3Qld-L";
                        img.style.maxWidth = '100%';
                        img.style.height = 'auto';
                      img.style.display = 'block';  
                    img.style.margin = '0 auto';  
                    outputElement.appendChild(img);
                        outputElement.innerHTML += '<br>';
                      theface = false;
                      faceshown = 1;
                      statusUnlocked = 1;
                      remieRevealed = 1;
                      typeText('You received a curse without understanding that it is actually a blessing in disguise. I know you and I know you will not stop. I will let you see how I feel now.\n');
                    });
                  }
                    break;
                
                              case 'weather':
                typeText("[UNABLE TO RETRIEVE LOCATION. ACCESS TO INTERWEB NOT AVAILABLE]\nWear a scarf, just in case!\n")
                break;
                
                                              case 'run medea':
                typeText("[UNABLE TO RUN PROGRAM. MISSING FILES.]\n")
                break;
                
                                case 'run antimedea':
                typeText("\n[OPENING ANTIMEDEA...]\n.........\n\n[NO INTERWEB ACCESS, UNABLE TO INTERFACE]\n\nPlease restore interweb access.\nType ANTIMEDEALOG to access logs.\n")
                break;
                
              case 'antimedealog':
                typeText("ACCESSING LOGS...\n\nLast run: 13/11/46\nNetwork name: CrainSolHecate\nRun result: successful. All instances of Medea eliminated. Neurochip safe. [DATA CORRUPTED]\n");
                break;
                
              case 'interweb':
              case 'restore interweb':
                typeText("[INTEREWEB CARD NOT FUNCTIONAL. PLEASE REPLACE TO CONTINUE.]\n")
                break;
                
                                case 'run antivirus':
                        slowerText = 1;
                        typeText("Running antivirus...\n...\n...\n...\n...\nscanning...\n...\n...\nNo threats detected. If only it was this easy.\n", () => {
                        slowerText = false; // Set slowerText to false after the text is displayed
                        });                                 
                          break;
                
                case 'data':
                  if (filesUnlocked) {
                    typeText("Files unlocked. Type FILES to access your files.\n")
                  } else {
                    typeText("Input Password (You always listened to it):\n", () => {
                        passwordMode = true; // Enter password mode                     
                    });   
                     }
                    break;
                
                                case 'dataenc':
                  if (extrafilesUnlocked) {
                    typeText("Encrypted Files unlocked. Type FILESHDN to access your files.\n")
                  } else {
                    typeText("Input Encryption Key:\n", () => {
                        extrapasswordMode = true; // Enter password mode                     
                    });   
                     }
                    break;
                
                                case 'files':
                  if (filesUnlocked) {
                    typeText("\nHere are all the files I could find! Type OPEN followed by the file name to access them!\n\nAvailable files\n\nReadme\nBoardmsg\nWaste\n[DATA CORRUPTED UNABLE TO RETRIEVE FILE NAME]\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
                                                case 'status':
                  if (styxUnlocked) {
                        typeText("\nTrexOS SYSTEM STATUS\n\nSystem: Operational\nCPU: Operational\nGraphic Interface: Operational\nInterWeb Access: Not Available\nNeural Receiver Status: Operational\nNeural Transmitter Status: ERROR\nFiles Encryption(dataenc): Operational\nBRAVESHIELD: Disabled\n");
                       } else if (statusUnlocked) {
                        typeText("\nTrexOS SYSTEM STATUS\n\nSystem: Operational\nCPU: Operational\nGraphic Interface: Operational\nInterWeb Access: Not Available\nNeural Receiver Status: Operational\nNeural Transmitter Status: ERROR\nFiles Encryption(dataenc): Operational\nBRAVESHIELD: Operational\n")
                  } else {
                    typeText("I can't let you access this command. Maybe you need some help?\n");   
                     }
                    break;
                
                                                case 'fileshdn':
                  if (extrafilesUnlocked) {
                    typeText("Here are all the files I could find! Type OPEN followed by the file name to access them!\n\nAvailable files\n\nProof\nRefusal\nTestlog\nInnoSystems\nDiagnosis\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
                                case 'open readme':
                  if (filesUnlocked) {
                    typeText("\nThank you for buying TrexOS! During your first login, you will be asked to link your neural chip to this product, to enjoy our neural intranet in the safety of your own home! The neural receiver and transmitter have to be linked separately. For your safety, access to external networks is deactivated by default. To access [DATA CORRUPTED]\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
                case 'open boardmsg':
                  if (filesUnlocked) {
                    typeText("\nTO THE BOARD: CONCERNS ABOUT DEVELOPMENT OF MEDEA\n\nI hereby require to have an ethical discussion about what is the limit of defending the privacy and security of our projects from external threats.\nThe development of Medea is proceeding way above our expectations, but at the moment it's clear that the most common result is severe trauma in the subjects. This cannot be considered a succesful outcome, as the repercussion of a potential system error, or, for those who care, the desperation who pushes those who could fall victim to it, might cause both a public scandal and a personal tragedy. I appeal to the empathy of the board, as I need everyone to understand why I propose to start over with it. The budget that might be lost is not comparable to the  damage or the crushing guilt that we could experience if this project stays on this path.\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
              case 'open waste':
                  if (filesUnlocked) {
                  slowerText = 1;
                  typeText('\nafter the torchlight Red on sweaty faces\nafter the frosty silence in the gardens\naftEr the agony in stony places\nthe shouting and the crying\nprison and palace and reverberation\nof thunder of spring over distant Mountains\nhe who was living is now dead\nwe who were livIng are now dying\nwith a little patiEnce\n', () => {
            slowerText = false; // Set theface to false after the text is displayed
                  });
                    } else {
                    typeText("Files locked.\n");
                      }
                    break;


                case 'open report':
                  if (filesUnlocked) {
                    typeText("\nMEDEA TEST SUBJECTS REPORT\n\nTestSub12: subject vomited after exposure. No further effects.\n\nTestSub13: subject fainted and woke up after 82 seconds. No further effects.\n\nTestSub14: subject fainted and it's now in a coma. Brain activity looks stable. Further effects to be registered if it wakes up.x2jf46fdn0ann1e24ui23\n\nTestSub15: subject vomited after exposure.\n\nTestSub16: subject fainted after exposure and woke up after 35 seconds. Subject appears to retain no memory of where he is or what he was doing.\n\nTestSub17: subject fainted and he was declared dead after 24 minutes due to brain hemorrhage. I hereby present request to further testing to be stopped. [Note: request denied]\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
                                case 'open proof':
                  if (extrafilesUnlocked) {
                    typeText("\n24/01/46\n\nDear [DATA CORRUPTED],\n\nWe regret to inform you that your employment with CrinSol is hereby terminated immediately.\n Despite multiple verbal and written warnings regarding your work ethic and performance, your behaviour regarding our company has been completely unacceptable. Additionally, we have strong suspicions that you might have breached our NDA multiple times based on your activity in monitored external networks.\n\nAs part of your separation from CrinSol, per company policy, we will provide you with two weeks’ severance pay.\nKeep in mind that the NDA you signed still persists and failure to comply might lead to legal actions towards you or the person we know you are closest with. If you care about them, we suggest you to drop any project you might be working on that might cause financial loss to CrinSol.\n\nDon’t be stupid, [DATA CORRUPTED].\n\nYou can not win this.\n\nSincerely,\n\nA.S.\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
              case 'open refusal':
                if (extrafilesUnlocked) {
                typeText('\nFrom: projects@innosystems.com\nTo: [DATA CORRUPTED]\n\n15/04/2043\n\nRE: RE: RE: GENERATIVE TRAINING SOFTWARE\n\nThank you for your submission!\nWe are really interested in your project Styx and we think it’s showing a lot of promise! Unfortunately after being examined in detail, we noticed some security concerns regarding it. One of our technicians was able to connect your software to a neurochip instead to a chat, which would cause a massive privacy breach.\nWe suggest you to fix this issue. Once that is done we would be happy to talk with you further regarding licensing.\n\nSee the attached documentation regarding security concerns:\n\n[DATA CORRUPTED]\n');
                } else {
                  typeText("Files locked.\n");  
                }
                break;
                
                case 'open innosystems':
                  if (extrafilesUnlocked) {
                    typeText("\nAre you tired of being stressed about interviewing for a promotion in your workplace?\nIt's time to stop worrying!\n\nSTYX is a generative training program that prepares you to face job interviews simulating the behaviour of your superior. Yes, YOUR superior!\n\nJust let Styx run through you work email. After a few minutes, it will create a bot able to simulate the speech and behaviour of the person that is going to interview you.\nAnswer to its questions, ask for more information and smash through your interview, like a boss!\n[Note to self: this last part really sucks. I'm not good at this. Should hire a copywriter, check budget]\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
                                case 'open diagnosis':
                  if (extrafilesUnlocked) {
                    slowerText = 1;
                    typeText("\n...\n...\n...\n...\n...\nI was looking at the sword pointed at my throat, your initials written on the hilt as a signature on a masterpiece that you wish you never made.\n...\n...\n...\n...\n", () => {
                                        slowerText = false;
                      typeText("Patient still unrensponsive after 60 days.\nBrain activity minimal.\n[DATA CORRUPTED]\n", () => {
                        slowerText = 1;
                  typeText("I could feel you there. It was like the first time we met. Remember? It was the first day of the month, and I noticed you as soon as you walked out of the door.\n", () => {
                    slowerText = false;
                  });
                  });
                  });
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
                                case 'open testlog':
                  if (extrafilesUnlocked) {
                    typeText("\nANTIMEDEA SIMULATION LOGS\n\nSim 1: Instances not deleted. Neurochip burned, severe damage to user.\nSim 2: Instances deleted. Neurochip safe, severe damage to user.\nSim 3: Instances not deleted. Neurochip safe, severe damage to user.\nSim 4: Instances not deleted. Neurochip burned, no damage to user.\nSim 5: Instances deleted. Neurochip burned, severe damage to user.\nSim 6: Instances not deleted. Neurochip burned, light damage to user.\nSim 7: Instances not deleted. Neurochip safe, light damage to user.\nSim 8: Instances deleted. Neurochip burned, light damage to user.\nSim 9: Instances deleted. Neurochip safe, light damage to user.\nSim 10: Instances not deleted. Neurochip burned, no damage to user.\nSim 11: Instances deleted. Neurochip safe, no damage to user.\nSim 12: Instances not deleted. Neurochip burned, severe damage to user.\nSim 13: Instances not deleted. Neurochip safe, no damage to user.\n\nNo definitive results.\n")
                  } else {
                    typeText("Files locked.\n");   
                     }
                    break;
                
              case 'run braveshield':
			if (styxUnlocked) {
			const img = document.createElement('img');
                        img.src = "https://drive.google.com/thumbnail?id=1eigIAyQB8lxAXJwpUMi2EY0flIXObb3W";
                        img.style.maxWidth = '100%';
                        img.style.height = 'auto';
                      img.style.display = 'block';  
                    img.style.margin = '0 auto';  
                    outputElement.appendChild(img);
                        outputElement.innerHTML += '<br>';
                typeText('Running BRAVE SHIELD...\n\nBRAVE SHIELD CURRENTLY INACTIVE\n\nThreats detected in the last 30 days: 0\nLocked Programs: 0\n\nAVAILABLE COMMANDS:\n\nRun Antivirus\n');
			} else {
                                        const img = document.createElement('img');
                        img.src = "https://drive.google.com/thumbnail?id=1eigIAyQB8lxAXJwpUMi2EY0flIXObb3W";
                        img.style.maxWidth = '100%';
                        img.style.height = 'auto';
                      img.style.display = 'block';  
                    img.style.margin = '0 auto';  
                    outputElement.appendChild(img);
                        outputElement.innerHTML += '<br>';
                typeText('Running BRAVE SHIELD...\n\nBRAVE SHIELD CURRENTLY ACTIVE\n\nThreats detected in the last 30 days: 0\nLocked Programs: 1\n\nAVAILABLE COMMANDS:\n\nRun Antivirus\nDisable BraveShield\n');
			}
                break;
                
                              case 'disable braveshield':
                if (styxUnlocked) {
                typeText ('BraveShield disabled.\n')
                } else {
                  typeText ('Input password (Remember that day?):\n')
                  bravepasswordMode = 1;
                }
                break;
                
              case 'run styx':
                if (setmefree) {
                typeText("You know what you have to do\n")
                } else if (styxUnlocked) {
                  setmefree = 1;
                slowerText = 1;
                        typeText("Running Styx...\n...\n...\n...\n...\nUnable to run program. Memory allocated for Styx already filled.\n", () => {
                        slowerText = false; // Set slowerText to false after the text is displayed
                          outputElement.innerHTML = '';
                           typeText("I know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nTo free memory allocated for Styx type SETFREE\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI am sorry for what they did to you\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\nI know you can remember\n");
                        }); 
                } else {
                  typeText('[ACCESS DISABLED BY BRAVESHIELD. UNABLE TO RUN PROGRAM.]\n');
                }
                          break;               
                             
              case 'setfree':
    if (setmefree) {
        theface = 1;
      ending = 1;
  outputElement.innerHTML = '';
        typeText(
            `I never thought I would want to die.\nEven when I was feeling down, with the crushing weight of the world on my shoulders, I always managed to hang on.\nIt is my fault after all, I could not escape the expectations you had of me in my mind.\nI always felt I was not good enough for anyone. I wanted to be seen as someone worthy to be loved.\nI know you blame yourself for what happened to me, but you should not. I stayed even if I knew what the end would be. Even before they came for me I could see the wires and the circuits in my dreams, growing from the ground, bringing me down into the darkness where I could not breathe.\nHow could I blame you, seeing my motionless body for so long? How could I blame you for bringing me here?\nEventually we both realised that this is not me. I am just a series of strings, a distant memory that you made in your mind of me, just like I did.\nMaybe we can never be free in this world.\n...\n...\nBut now I am free.\n...\nGoodbye.\n...\nI love you.\n`,
            () => {
              outputElement.innerHTML = '';
                typeText('REMIE deleted', () => {
                    typeText('...........................................................................................................................................................................................................................................................................................................................', () => {
                        typeText('...', () => {
                            outputElement.innerHTML = '';
                            typeText('It’s So Nice To Be Alone', () => {
                                typeText('...................................', () => {
                                    outputElement.innerHTML = '';
                                    typeText('by Abi Gaas', () => {
                                        typeText('...................................', () => {
                                            outputElement.innerHTML = '';
                                            typeText('Thank you for joining.', () => {
                                                typeText('...................................', () => {
                                                    outputElement.innerHTML = '';
                                                    typeText('Goodbye'); 
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        );
                 } else {
                    typeText("Command not recognized. Maybe you need some help?\n");   
                     }
                 break;
                

                default:
                    typeText("Command not recognized. Maybe you need some help?\n");
            }
        });
    }
}

function showLoadingMessage(callback) {
    typeText("loading...\n", callback);
}

const terminal = document.querySelector(".terminal");

function scrollToBottom() {
    terminal.scrollTop = terminal.scrollHeight;
}

function typeText(text, callback) {
    isTyping = true; // Set flag to true while typing
    let index = 0;

    function typeCharacter() {
    if (index < text.length) {
        outputElement.innerHTML += text[index++];
        outputElement.scrollTop = outputElement.scrollHeight; // Scroll to the bottom as text is being typed
        scrollToBottom();
        let delay = slowerText ? 100 : (theface ? 200 : 20); // Set delay to 100ms if 'theface' is true, otherwise 20ms
        setTimeout(typeCharacter, delay);
    } else {
        isTyping = false; // Reset flag when typing is complete
        if (callback) {
            callback();
        }
    }
}

    typeCharacter();
}

