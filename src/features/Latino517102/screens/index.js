import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1556_173}>
        <View style={styles.View_1556_174}>
          <Text style={styles.Text_1556_174}>Latino</Text>
        </View>
        <View style={styles.View_1556_175} />
        <View style={styles.View_1556_176}>
          <Text style={styles.Text_1556_176}>BARCELONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/6422/148a62d040106614890cb88c8f5708c0"
          }}
          style={styles.ImageBackground_1556_177}
        />
        <View style={styles.View_1556_178}>
          <Text style={styles.Text_1556_178}>La Gringa</Text>
        </View>
        <View style={styles.View_1556_179}>
          <Text style={styles.Text_1556_179}>Mexican-American</Text>
        </View>
        <View style={styles.View_1556_180}>
          <Text style={styles.Text_1556_180}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4733/46dc/a1efc0bb71d27dec361583a2c2c16ed9"
          }}
          style={styles.ImageBackground_1556_181}
        />
        <View style={styles.View_1556_182}>
          <Text style={styles.Text_1556_182}>El Pachuco</Text>
        </View>
        <View style={styles.View_1556_183}>
          <Text style={styles.Text_1556_183}>Best nachos in town</Text>
        </View>
        <View style={styles.View_1556_184}>
          <Text style={styles.Text_1556_184}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8034/2bd4/015feb7904c77780ada70b6885dab9ed"
          }}
          style={styles.ImageBackground_1556_185}
        />
        <View style={styles.View_1556_186}>
          <Text style={styles.Text_1556_186}>Taco Alto Born</Text>
        </View>
        <View style={styles.View_1556_187}>
          <Text style={styles.Text_1556_187}>Mexican-American</Text>
        </View>
        <View style={styles.View_1556_188}>
          <Text style={styles.Text_1556_188}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c5/2f12/6e86a17be1709e8c47a12382cd7f5c44"
          }}
          style={styles.ImageBackground_1556_189}
        />
        <View style={styles.View_1556_190}>
          <Text style={styles.Text_1556_190}>El Tamarindo</Text>
        </View>
        <View style={styles.View_1556_191}>
          <Text style={styles.Text_1556_191}>Best nachos in town</Text>
        </View>
        <View style={styles.View_1556_192}>
          <Text style={styles.Text_1556_192}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4839/54b9/7590ff9afa251649c8781c0b2bff1345"
          }}
          style={styles.ImageBackground_1556_193}
        />
        <View style={styles.View_1556_194}>
          <Text style={styles.Text_1556_194}>La Taqueria</Text>
        </View>
        <View style={styles.View_1556_195}>
          <Text style={styles.Text_1556_195}>Mexican-American</Text>
        </View>
        <View style={styles.View_1556_196}>
          <Text style={styles.Text_1556_196}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b07/af8e/30b8bd1206f844dd30d4c64487c96e8f"
          }}
          style={styles.ImageBackground_1556_197}
        />
        <View style={styles.View_1556_198}>
          <Text style={styles.Text_1556_198}>La Fabrica del Tacos</Text>
        </View>
        <View style={styles.View_1556_199}>
          <Text style={styles.Text_1556_199}>Best nachos in town</Text>
        </View>
        <View style={styles.View_1556_200}>
          <Text style={styles.Text_1556_200}>€15/person</Text>
        </View>
        <View style={styles.View_1556_201} />
        <View style={styles.View_1556_202} />
        <View style={styles.View_1556_203}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60dc/78b0/ba45f4e1d386355aa7729816786f4c79"
            }}
            style={styles.ImageBackground_1556_204}
          />
          <View style={styles.View_1556_205} />
        </View>
        <View style={styles.View_1556_206}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dab/89c5/f9e5d1c2fab25462f1a787bdb714ad1a"
            }}
            style={styles.ImageBackground_1556_207}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c2c/0301/f38aeae4474e57918d4597d16b31eb8b"
            }}
            style={styles.ImageBackground_1556_208}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1556_173: {
    width: 375,
    minWidth: 375,
    height: 920,
    minHeight: 920,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1556_174: {
    width: 179,
    minWidth: 179,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 135
  },
  Text_1556_174: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_175: {
    width: 90,
    minWidth: 90,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 87,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_176: {
    width: 90,
    minWidth: 90,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 91
  },
  Text_1556_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_177: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 182,
    resizeMode: "cover"
  },
  View_1556_178: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 335
  },
  Text_1556_178: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_179: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 359
  },
  Text_1556_179: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_180: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 382
  },
  Text_1556_180: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_181: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 182,
    resizeMode: "cover"
  },
  View_1556_182: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 335
  },
  Text_1556_182: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_183: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 359
  },
  Text_1556_183: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_184: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 382
  },
  Text_1556_184: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_185: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 423,
    resizeMode: "cover"
  },
  View_1556_186: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 576
  },
  Text_1556_186: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_187: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 600
  },
  Text_1556_187: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_188: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 623
  },
  Text_1556_188: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_189: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 423,
    resizeMode: "cover"
  },
  View_1556_190: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 576
  },
  Text_1556_190: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_191: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 600
  },
  Text_1556_191: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_192: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 623
  },
  Text_1556_192: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_193: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 664,
    resizeMode: "cover"
  },
  View_1556_194: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 817
  },
  Text_1556_194: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_195: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 841
  },
  Text_1556_195: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_196: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 864
  },
  Text_1556_196: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_197: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 664,
    resizeMode: "cover"
  },
  View_1556_198: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 817
  },
  Text_1556_198: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_199: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 841
  },
  Text_1556_199: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_200: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 864
  },
  Text_1556_200: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_201: {
    width: 187,
    minWidth: 187,
    height: 229,
    minHeight: 229,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 182
  },
  View_1556_202: {
    width: 188,
    minWidth: 188,
    height: 229,
    minHeight: 229,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    top: 182
  },
  View_1556_203: {
    width: 74,
    minWidth: 74,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 15
  },
  ImageBackground_1556_204: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 25,
    resizeMode: "cover"
  },
  View_1556_205: {
    width: 74,
    minWidth: 74,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1556_206: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 193
  },
  ImageBackground_1556_207: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1556_208: {
    width: 13.083869934082031,
    height: 15.600000381469727,
    top: 7.2001953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.39990234375
  },
  View_2: { height: 920 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
