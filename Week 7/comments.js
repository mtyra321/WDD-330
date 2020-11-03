 var comments = [];


 class Comment {
     constructor(type, key) {
         this.type = type;
         this.key = key;
         this.getAllComments()
     }


     showCommentsList() {

     }

     addNewComment(text, key) {
         const newComment = {
             name: hikeName,
             date: new Date(),
             content: comment
         }
         newTodo.id = newTodo.id.toString();
         todos.push(newTodo);
     }

     getAllComments() {

     }

     renderCommentList() {

     }
     filterCommentsByName() {

     }

     getFromLS(key) {
         var a = localStorage.getItem(key);
         var parsed;
         try {
             parsed = JSON.parse(a); // this is how you parse a string into JSON 
         } catch (ex) {
             console.error(ex);
         }
         return parsed;
     }


     saveToLS(key, data) {
         localStorage.setItem(key, JSON.stringify(data));
     }
 }
 export default Comment;