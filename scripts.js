var Mega_toString = function(){
    
    this.print = print;
    /**
     * Creates string desciribing any object or literal and all nested properties.
     * ie. Recreate the browser javascript console output
     *  as a string that you can use for development, etc.
     * 
     * @param  {any} obj - any object or simple
     * @param  {number} [depth] - starting indent, used internally during recursion
     * @returns {string}
     * 
     * @example
     *      print(myObject);
     * 
     */
    function print(obj, depth){
        var out = '';

        depth = depth || 0;
        
        if (typeof obj == 'string'){
            // Print string and length.
            out += `"${obj}"`;
        }
        else if(typeof obj == 'function'){
            // Print function header (native functions may not show parameters).
            var body = obj.toString();
            var header = body.substring(0, body.indexOf('{'))//.replace(/[^\w\s\(\)\,]/gi, '');
            out += `${header}{ ... }`;
        }
        else if (obj && typeof obj == 'object'){
            // Print object and any nested properties that we can get out grubby little hands on.
            // Keep track of depth so we can indent appropriately
            depth++;

            // Get object keys
            var keys = Object.keys(obj);
            if (obj.__proto__){
                // Also get keys from prototype if availabile (added to top of list).
                // Prototype keys are overridden by main keys if duplicate.
                var protoKeys = Object.keys(obj.__proto__);
                for (var pkey of protoKeys){
                    if (!keys.includes(pkey)){
                        keys.unshift(pkey);
                    }
                }
            } 

            // Print type and length
            out += `[${obj.constructor.name}](${keys.length}){`;
            // Prevent infinite recursion, depth limited
            if (keys.length > 0 && depth > 5){ 
                return out += `\n${getIndent(depth)}...`;
            } 
            // Print each key and value
            for (key of keys){
                // Print key name
                out += `\n${getIndent(depth)}${key}: `;
                
                // If we arent directly recurring, run again for each key.
                if (obj[key] !== obj){
                    out += `${print(obj[key], depth)}`;
                }else{
                    // If we are directly recurring, stop and print <self> instead.
                    out += `<self>`;
                }
            }
            // Print closing brace, if object empty, print on same line as opening brace
            if (keys.length > 0) out += `\n${getIndent(depth - 1)}`;
            out += `}`;
        }
        else{
            // Simple types, print cleaner
            if (['undefined', 'boolean', 'number'].includes(typeof obj) || obj === null){
                out += `${obj}`;
            }
            else{
                // Any other type we didnt capture already
                out += `[${typeof obj}] ${obj}`;
            }
            
        }

        return out + ', ';
    }
    //helper function to create tab indents to a given depth
    function getIndent(n){
        var out = '';
        var tab = '    ';
        for (var i = 0; i < n && i >= 0; i++){
            out += tab;
        }
        return out;
    }

}

//demo 
mega_toString = new Mega_toString();
document.querySelector('#main').innerText = mega_toString.print(window);