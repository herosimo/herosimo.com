import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Cta from '../components/cta'
import Blog from '../components-page/home/blog/blog'
import Banner from '../components-page/home/banner/banner'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDetails = get(this, 'props.data.contentfulGeneralSiteDetails')
    const homepage = get(this, 'props.data.contentfulHomepage')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <Banner homepage={homepage} siteDetails={siteDetails} />
        <Blog homepage={homepage} posts={posts} />
        <Cta homepage={homepage} siteDetails={siteDetails} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "M.D.YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 350) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulHomepage {
      bannerTitle {
        bannerTitle
      }
      bannerSubtitle {
        bannerSubtitle
      }
      blogTitle {
        blogTitle
      }
      blogSubtitle {
        blogSubtitle
      }
      blogContentMoreTitle {
        blogContentMoreTitle
      }
      blogContentMoreLinkTitle {
        blogContentMoreLinkTitle
      }
      ctaTitle {
        ctaTitle
      }
      ctaSubtitle {
        ctaSubtitle
      }
    }
    contentfulGeneralSiteDetails {
      email
      socialMedia {
        title
        description
        file {
          url
        }
      }
    }
  }
`
