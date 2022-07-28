
import s from './homepage.module.css'
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import React from 'react'

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
      <img width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
      <h1>𝓡𝓮𝓪𝓭 𝓦𝓻𝓲𝓽𝓮 𝓓𝓲𝓼𝓬𝓾𝓼𝓼</h1>
      <br />
   <Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<StyledNode href={`/${web}`}>Web development</StyledNode>}
  >
    <TreeNode label={<StyledNode>HTML</StyledNode>}></TreeNode>
    <TreeNode label={<StyledNode>CSS</StyledNode>}></TreeNode>
    <TreeNode label={<StyledNode>JAVASCRIPT</StyledNode>}>
    </TreeNode>
   
  </Tree>
    </div>
  )
}
