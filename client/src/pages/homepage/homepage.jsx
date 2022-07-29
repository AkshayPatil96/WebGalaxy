
import s from './homepage.module.css'
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import React from 'react'
import { Link } from 'react-router-dom';

const StyledNode = styled.a`
  padding: 6px 15px ;
  color: #0d1317;
  font-weight:bold;
  text-decoration: none;
  border-radius: 8px;
  display: inline-block;
  background-color: rgb(221, 255, 0);
`;

export const Homepage = () => {

let web='development'
  return (
   
    <div className={s.mainDiv}>
     <div> <img className={s.image} width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" /></div>
     
      <h1>𝓡𝓮𝓪𝓭 𝓦𝓻𝓲𝓽𝓮 𝓓𝓲𝓼𝓬𝓾𝓼𝓼</h1>
      <br />
   <Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<Link to={`/${web}`}><StyledNode>Full Stack Web Development</StyledNode></Link>}
  >
    <TreeNode label={<Link to='/'><StyledNode>Front end</StyledNode></Link>}>
    <TreeNode label={<Link to='/'><StyledNode>HTML</StyledNode></Link>}>
</TreeNode>

<TreeNode label={<Link to='/'><StyledNode>CSS</StyledNode></Link>}>
<TreeNode label={<Link to='/'><StyledNode>Tailwind CSS</StyledNode></Link>}>
</TreeNode>

<TreeNode label={<Link to='/'><StyledNode>Chakra UI</StyledNode></Link>}>
</TreeNode> <TreeNode label={<Link to='/'><StyledNode>Sass</StyledNode></Link>}>
</TreeNode>

</TreeNode>


<TreeNode label={<Link to='/'><StyledNode>JavaScript</StyledNode></Link>}>
<TreeNode label={<Link to='/'><StyledNode>React.js</StyledNode></Link>}>
<TreeNode label={<Link to='/'><StyledNode>Next.js</StyledNode></Link>}>

</TreeNode>
</TreeNode>
<TreeNode label={<Link to='/'><StyledNode>TypeScript</StyledNode></Link>}>
</TreeNode>

</TreeNode>

    </TreeNode>

    <TreeNode label={<Link to='/'><StyledNode>Back end</StyledNode></Link>}>
  <TreeNode label={<Link to='/'><StyledNode>Node.js</StyledNode></Link>}>   
  <TreeNode label={<Link to='/'><StyledNode>Express.js</StyledNode></Link>}>   
</TreeNode>
</TreeNode>

<TreeNode label={<Link to='/'><StyledNode>MongoDB</StyledNode></Link>}>   
</TreeNode>
   
</TreeNode>


<TreeNode label={<Link to='/'><StyledNode>Tools</StyledNode></Link>}>
<TreeNode label={<Link to='/'><StyledNode>Git & GitHub</StyledNode></Link>}>
</TreeNode>
  <TreeNode label={<Link to='/'><StyledNode>VS Code</StyledNode></Link>}>
  
  </TreeNode>
  <TreeNode label={<Link to='/'><StyledNode>NPM</StyledNode></Link>}>
  
  </TreeNode>
  </TreeNode>
   
  </Tree>
    </div>
  )
}
