# Mega toString

Creates string desciribing any object or literal and all nested properties.
 **ie.** *Recreate the browser javascript console output as a string that you can use for development, etc.*

## Usage

`mega_toString.print(obj)` 
* obj `any` - the object or simple to be inspected
* includeProto `boolean` - (optional) set true if you want to show the `__proto__` keys

**>** returns `string`

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
                sub2_1: new Date(),
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
    *                sub2_1: [Date] Mon Jan 13 2020 15:42:13 GMT-0800 (Pacific Standard Time),
    *                sub2_2: null, 
    *            }, 
    *        }, 
    *    }, "
    *
    */