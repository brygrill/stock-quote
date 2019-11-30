import React from 'react';
import { graphql } from 'gatsby';
import { Box } from 'rebass';
import Layout from '../layout/Main';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const PostTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <Layout maxWidth={768}>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <h4>
      {data.site.siteMetadata.author.name} -{' '}
      {data.markdownRemark.frontmatter.date}
    </h4>
    <div className="divider" />
    <Box
      sx={{
        p: 1,
      }}
    >
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Box>
  </Layout>
);

export default PostTemplate;

export const query = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
