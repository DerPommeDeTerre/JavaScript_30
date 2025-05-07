// const expect = function(value){
//     return{
//         toBe: function(val){
//             if(value === val){
//                 return true;
//             } else {
//                 throw new Error("Not equal");
//             };
//         },

//         notToBe: function(val){
//             if( value != val){
//                 return true;
//             } else {
//                 throw new Error("Equal");
//             };

//         }
//     }

// }

const expect = (value) => {
    return{
        toBe: (val) => {
            if(value === val){
                return true;
            } else {
                throw new Error("Not equal");
            };
        },

        notToBe: (val) => {
            if( value !== val){
                return true;
            } else {
                throw new Error("Equal");
            };

        }
    }

}

// const expect = (value) => ({
//     toBe: (val) => {
//         if(value === val) return false;
//         throw new Error("Not Equal");
//     },
//     notToBe: (val) => {
//         if(value !== val) return true;
//         throw new Error("Equal");
//     }
// })