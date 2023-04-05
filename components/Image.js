import NextImage from 'next-image-export-optimizer'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage {...rest} unoptimized />

export default Image
