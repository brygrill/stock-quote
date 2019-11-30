import * as React from 'react';
import { graphql } from 'gatsby';

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
      };
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <Layout maxWidth={768}>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

export default PageTemplate;

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
        path
        title
      }
    }
  }
`;
