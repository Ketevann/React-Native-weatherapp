import React, {Component} from 'react';
import BottomToolbar from 'react-native-bottom-toolbar'
import { Actions } from 'react-native-router-flux';

class Footer extends Component {
  render(){
    return(

        <BottomToolbar>
          <BottomToolbar.Action
            title="Search"
            onPress={() =>

              Actions.search()
          }
          />
          <BottomToolbar.Action
            title="Copy ULR"
            onPress={(index, propsOfThisAction) =>
              console.warn(index + ' ' + JSON.stringify(propsOfThisAction))}
          />
          <BottomToolbar.Action
            title="Delete"
            onPress={(index, propsOfThisAction) =>
              console.warn(index + ' ' + JSON.stringify(propsOfThisAction))}
          />
        </BottomToolbar>
    )
  }
}

export {Footer}
