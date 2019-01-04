import React , {Component} from 'react';
import { Animated,View, Image} from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

const img = require('../../assets/NY1.jpg');

export default class HomeScreen extends Component {

    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
      }

    static navigationOptions = {
      title: 'Animation',
    };
  
    constructor(props) {
      super(props);
  
      this.navigate = this.props.navigation.navigate;
  
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
          this.state.fadeAnim,            // The animated value to drive
          {
            toValue: 1,                   // Animate to opacity: 1 (opaque)
            duration: 10000,              // Make it take a while
          }
        ).start();                        // Starts the animation
      }
  
    render() {
        let { fadeAnim } = this.state;
      return (
        
          <View>
            <Animated.Image source={img}
            style={{
                opacity: fadeAnim, 
            }}
            />
          </View>
        
      );
    }
  }
  