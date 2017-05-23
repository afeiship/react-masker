# react-masker
> Masker for react.


## props:
```javascript
  static propTypes = {
    className:PropTypes.string,
    visible:PropTypes.bool,
  };

  static defaultProps = {
    visible:true
  };
```

## usage:
```jsx
import ReactMasker from 'react-masker';

class App extends React.Component{
  state =  {
    visible:true
  };
  _click1 = (e) =>{
    this.setState({
      visible:!this.state.visible
    });
  };
  render(){
    return (
      <div className="hello-react-masker">
        <button onClick={this._click1}>Toggle masker</button>
        <ReactMasker onClick={this._click1} visible={this.state.visible} className="test1">
          Test content...
        </ReactMasker>
      </div>
    );
  }
}

```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

