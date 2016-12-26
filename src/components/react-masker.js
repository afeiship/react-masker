import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    width:React.PropTypes.string
  };

  static defaultProps = {
    width:'100%'
  };

  constructor(props) {
    super(props);
    this.state = {
      width:props.width
    };
  }

  render(){
    return (
      <div className={classNames('react-masker',this.props.cssClass)}>
        <div className="mask">
          <div className="bd" style={{width:this.state.width}}>{this.props.children}</div>
        </div>
        <div className="img">
          <img src={this.props.img} alt=""/>
        </div>
      </div>
    );
  }
}
