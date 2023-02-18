import articleContent from "./article-content"

// Components 
import Articles from "../components/Articles";

const ArticlesList = () => { 
   return ( 
     <div> 
       <h1> 
         Articles 
       </h1> 
       <div> 
         <div> 
           <Articles articles={articleContent} /> 
         </div> 
       </div> 
     </div> 
   ); 
 }; 
  
export default ArticlesList;
