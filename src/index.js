module.exports =    function check(str, bracketsConfig) {
        // your solution
        var openingChars = [];
        var closingChars = [];       
        for(var i = 0; i<bracketsConfig.length; i++){
            if (bracketsConfig[i][0] === bracketsConfig[i][1])
    {
        bracketsConfig[i][0] = '{';
        bracketsConfig[i][1] = '}';
        //console.log(bracketsConfig[i][0]);
        //console.log(bracketsConfig[i][1]);
    }
            openingChars.push(bracketsConfig[i][0]);
            console.log(bracketsConfig[i][0]+'c1');
            closingChars.push(bracketsConfig[i][1]);
            console.log(bracketsConfig[i][1]+'c2');                        
        }       
        var stack = [];
        for (var j = 0, len = str.length; j < len; j++) {
            var char = str[j];
            var openIdx = openingChars.indexOf(char);
            //console.log(openIdx+'-open');
            var closeIdx = closingChars.indexOf(char);
            //console.log(closeIdx+'-close');
            if (openIdx !== -1) {
                stack.push(openIdx);
                //console.log(stack);              
                //console.log(stack+'stack-open');
            }
            else if (closeIdx !== -1) {               
                if (stack.length === 0) return false;
                var lastIdx = stack.pop();
                // console.log(stack+'stack-last');
                //console.log(lastIdx+'-lastIdx');
                if (lastIdx !== closeIdx) return false;
            }
        }
//console.log(stack+'-stack');
        if (stack.length !== 0) return false;
        return true;
    }