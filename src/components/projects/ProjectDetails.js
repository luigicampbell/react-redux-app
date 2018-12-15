import React from 'react'

const ProjectDetails = (props) => {
  // console.log(props); 
  // being passed automatically by Route from URL and match attribute holds the params
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      
      <div className="card z-depth-0">
        
        <div className="card-content">
          <span className="card-title">Project Title - { id } </span>
          <p>Lorem ipsum dolor amet roof party chillwave man braid, DIY tumblr offal meh hashtag mustache raw denim duis. Duis yr aesthetic, messenger bag consequat pabst asymmetrical. Kinfolk ramps craft beer hashtag. Tumblr hashtag mlkshk kinfolk occupy. Man braid proident cray etsy lyft. VHS celiac church-key 90's truffaut intelligentsia vexillologist shoreditch. Brooklyn anim irony jean shorts dolor.</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by LC</div>
          <div>DATE</div>
        </div>
      </div>
      
    </div>
  );
}

export default ProjectDetails;
