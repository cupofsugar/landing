import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <Layout>
    <div className="blog-post-container">
     <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div></Layout>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
;