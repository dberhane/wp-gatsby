import React, { Component } from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Alert } from "reactstrap"
//import PostIcons from "../components/PostIcons"
//import Img from "gatsby-image"

//import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Container>
        <Row>
          <Col xs="9">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <Alert color="primary">
              This is a primary alert — check it out!
            </Alert>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {post.acf &&
              post.acf.page_builder_post &&
              post.acf.page_builder_post.map((layout, i) => {
                if (layout.__typename === `WordPressAcf_image_gallery`) {
                  return (
                    <div key={`${i} image-gallery`}>
                      <h2>ACF Image Gallery</h2>
                      {layout.pictures.map(({ picture }) => {
                        const img = picture.localFile.childImageSharp.sizes
                        return <Img key={img.src} sizes={img} />
                      })}
                    </div>
                  )
                }
                if (layout.__typename === `WordPressAcf_post_photo`) {
                  const img = layout.photo.localFile.childImageSharp.sizes
                  return (
                    <div key={`${i}-photo`}>
                      <h2>ACF Post Photo</h2>
                      <Img
                        css={{ marginBottom: rhythm(1) }}
                        src={img.src}
                        sizes={img}
                      />
                    </div>
                  )
                }
                return null
              })}
          </Col>
          <Col xs="3">
          <h2>Side bar</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}
//<img src={post.image.sizes.thumbnail} />

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
