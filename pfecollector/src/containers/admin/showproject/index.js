import React from 'react'
import Layout from '../../../components/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

/**
* @author
* @function ShowProject
**/

const ShowProject = (props) => {

  let { projectId } = useParams();
console.log(projectId)
  return(
   <Layout sidebar>
     oups
   </Layout>
   )

 }

export default ShowProject