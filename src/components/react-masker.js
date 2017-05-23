import './style.scss';

import PropTypes from 'prop-types';
import {ReactBackdrop} from 'react-backdrop';
import classNames from 'classnames';

export default class extends React.PureComponent{
  static propTypes = {
    className:PropTypes.string,
    visible:PropTypes.bool,
  };

  static defaultProps = {
    visible:true
  };

  render(){
    const {className,children,...props} = this.props;
    return (
      <ReactBackdrop {...props} className={classNames('react-masker',className)}>
        <div className="bd">{children}</div>
      </ReactBackdrop>
    );
  }
}
