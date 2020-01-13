# Mega toString

Creates string desciribing any object or literal and all nested properties.
 **ie.** *Recreate the browser javascript console output as a string that you can use for development, etc.*

---
## Usage

`mega_toString.print(obj)` 
* obj `any` - any object or simple

**>** returns `string`

----
## Example
    mega_toString = new Mega_toString();
    var myObject = {
        test1: { 
            sub1: true,
            sub2: 1234
        },
        test2: { 
            sub1: function(test){return test;},
            sub2: {
                sub2_1: 1,
                sub2_2: null,
            }
        }
    };
    mega_toString.print(myObject);
    /* Returns -->
    *
    *   "[Object](2){
    *        test1: [Object](2){
    *            sub1: true, 
    *            sub2: 1234, 
    *        }, 
    *        test2: [Object](2){
    *            sub1: function(test){ ... }, 
    *            sub2: [Object](2){
    *                sub2_1: 1, 
    *                sub2_2: null, 
    *            }, 
    *        }, 
    *    }, "
    *
    */