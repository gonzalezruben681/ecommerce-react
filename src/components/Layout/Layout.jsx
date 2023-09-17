import PropTypes from 'prop-types'

function Layout({ children }) {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return (
        <div className='flex flex-col items-center mt-20 max-md:mt-24 max-sm:flex-wrap'>{children}</div>
    )
}


export default Layout