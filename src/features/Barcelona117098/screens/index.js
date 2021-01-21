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
      <View style={styles.View_1556_210}>
        <View style={styles.View_1556_211}>
          <Text style={styles.Text_1556_211}>Barcelona</Text>
        </View>
        <View style={styles.View_1556_212}>
          <Text style={styles.Text_1556_212}>All Places</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/6422/148a62d040106614890cb88c8f5708c0"
          }}
          style={styles.ImageBackground_1556_213}
        />
        <View style={styles.View_1556_214}>
          <Text style={styles.Text_1556_214}>La Gringa</Text>
        </View>
        <View style={styles.View_1556_215}>
          <Text style={styles.Text_1556_215}>Mexican-American</Text>
        </View>
        <View style={styles.View_1556_216}>
          <Text style={styles.Text_1556_216}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4733/46dc/a1efc0bb71d27dec361583a2c2c16ed9"
          }}
          style={styles.ImageBackground_1556_217}
        />
        <View style={styles.View_1556_218}>
          <Text style={styles.Text_1556_218}>El Pachuco</Text>
        </View>
        <View style={styles.View_1556_219}>
          <Text style={styles.Text_1556_219}>Best nachos in town</Text>
        </View>
        <View style={styles.View_1556_220}>
          <Text style={styles.Text_1556_220}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c5/2f12/6e86a17be1709e8c47a12382cd7f5c44"
          }}
          style={styles.ImageBackground_1556_221}
        />
        <View style={styles.View_1556_222}>
          <Text style={styles.Text_1556_222}>El Tamarindo</Text>
        </View>
        <View style={styles.View_1556_223}>
          <Text style={styles.Text_1556_223}>Mexican-American</Text>
        </View>
        <View style={styles.View_1556_224}>
          <Text style={styles.Text_1556_224}>€15/person</Text>
        </View>
        <View style={styles.View_1556_225}>
          <Text style={styles.Text_1556_225}>Taco Alto Born</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8034/2bd4/015feb7904c77780ada70b6885dab9ed"
          }}
          style={styles.ImageBackground_1556_226}
        />
        <View style={styles.View_1556_227}>
          <Text style={styles.Text_1556_227}>Best nachos in town</Text>
        </View>
        <View style={styles.View_1556_228}>
          <Text style={styles.Text_1556_228}>€15/person</Text>
        </View>
        <View style={styles.View_1617_4}>
          <View style={styles.View_1556_229} />
          <View style={styles.View_1556_230}>
            <Text style={styles.Text_1556_230}>15 places</Text>
          </View>
          <View style={styles.View_1556_231} />
          <View style={styles.View_1556_232}>
            <Text style={styles.Text_1556_232}>Spanish</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
            }}
            style={styles.ImageBackground_1556_233}
          />
        </View>
        <View style={styles.View_1617_5}>
          <View style={styles.View_1556_234} />
          <View style={styles.View_1556_235}>
            <Text style={styles.Text_1556_235}>15 places</Text>
          </View>
          <View style={styles.View_1556_236} />
          <View style={styles.View_1556_237}>
            <Text style={styles.Text_1556_237}>Asian</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
            }}
            style={styles.ImageBackground_1556_238}
          />
        </View>
        <View style={styles.View_1617_6}>
          <View style={styles.View_1556_239} />
          <View style={styles.View_1556_240}>
            <Text style={styles.Text_1556_240}>15 places</Text>
          </View>
          <View style={styles.View_1556_241} />
          <View style={styles.View_1556_242}>
            <Text style={styles.Text_1556_242}>Latino</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
            }}
            style={styles.ImageBackground_1556_243}
          />
        </View>
        <View style={styles.View_1617_7}>
          <View style={styles.View_1556_244} />
          <View style={styles.View_1556_245}>
            <Text style={styles.Text_1556_245}>15 places</Text>
          </View>
          <View style={styles.View_1556_246} />
          <View style={styles.View_1556_247}>
            <Text style={styles.Text_1556_247}>American</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
            }}
            style={styles.ImageBackground_1556_248}
          />
        </View>
        <View style={styles.View_1617_8}>
          <View style={styles.View_1556_249} />
          <View style={styles.View_1556_250}>
            <Text style={styles.Text_1556_250}>15 places</Text>
          </View>
          <View style={styles.View_1556_251} />
          <View style={styles.View_1556_252}>
            <Text style={styles.Text_1556_252}>Brunch</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
            }}
            style={styles.ImageBackground_1556_253}
          />
        </View>
        <View style={styles.View_1617_9}>
          <View style={styles.View_1556_254} />
          <View style={styles.View_1556_255}>
            <Text style={styles.Text_1556_255}>15 places</Text>
          </View>
          <View style={styles.View_1556_256} />
          <View style={styles.View_1556_257}>
            <Text style={styles.Text_1556_257}>Vegetarian</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
            }}
            style={styles.ImageBackground_1556_258}
          />
        </View>
        <View style={styles.View_1617_10}>
          <View style={styles.View_1556_259} />
          <View style={styles.View_1556_260}>
            <Text style={styles.Text_1556_260}>15 places</Text>
          </View>
          <View style={styles.View_1556_261} />
          <View style={styles.View_1556_262}>
            <Text style={styles.Text_1556_262}>Italian</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
            }}
            style={styles.ImageBackground_1556_263}
          />
        </View>
        <View style={styles.View_1556_270}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dab/89c5/f9e5d1c2fab25462f1a787bdb714ad1a"
            }}
            style={styles.ImageBackground_1556_271}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c2c/0301/f38aeae4474e57918d4597d16b31eb8b"
            }}
            style={styles.ImageBackground_1556_272}
          />
        </View>
        <View style={styles.View_1617_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd7/6c97/3aca7aa77863584c00f07b6c6b7b7721"
            }}
            style={styles.ImageBackground_1556_269}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1556_210: {
    width: 375,
    minWidth: 375,
    height: 1151,
    minHeight: 1151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden"
  },
  View_1556_211: {
    width: 162,
    minWidth: 162,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 106
  },
  Text_1556_211: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_212: {
    width: 162,
    minWidth: 162,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 596
  },
  Text_1556_212: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_213: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 650,
    resizeMode: "cover"
  },
  View_1556_214: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 803
  },
  Text_1556_214: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_215: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 827
  },
  Text_1556_215: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_216: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 850
  },
  Text_1556_216: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_217: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 650,
    resizeMode: "cover"
  },
  View_1556_218: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 803
  },
  Text_1556_218: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_219: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 827
  },
  Text_1556_219: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_220: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 850
  },
  Text_1556_220: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_221: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 891,
    resizeMode: "cover"
  },
  View_1556_222: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 1044
  },
  Text_1556_222: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_223: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 1068
  },
  Text_1556_223: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_224: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 1091
  },
  Text_1556_224: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_225: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 1044
  },
  Text_1556_225: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_226: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 891,
    resizeMode: "cover"
  },
  View_1556_227: {
    width: 169,
    minWidth: 169,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 1068
  },
  Text_1556_227: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_228: {
    width: 169,
    minWidth: 169,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 1091
  },
  Text_1556_228: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1617_4: {
    width: 357,
    minWidth: 357,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 180
  },
  View_1556_229: {
    width: 87,
    minWidth: 87,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_230: {
    width: 87,
    minWidth: 87,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 1
  },
  Text_1556_230: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_231: {
    width: 357,
    minWidth: 357,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_232: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 1
  },
  Text_1556_232: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_233: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 7
  },
  View_1617_5: {
    width: 357,
    minWidth: 357,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 235
  },
  View_1556_234: {
    width: 87,
    minWidth: 87,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_235: {
    width: 87,
    minWidth: 87,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 1
  },
  Text_1556_235: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_236: {
    width: 357,
    minWidth: 357,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_237: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 1
  },
  Text_1556_237: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_238: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 7
  },
  View_1617_6: {
    width: 357,
    minWidth: 357,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 290
  },
  View_1556_239: {
    width: 87,
    minWidth: 87,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_240: {
    width: 87,
    minWidth: 87,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 1
  },
  Text_1556_240: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_241: {
    width: 357,
    minWidth: 357,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_242: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 1
  },
  Text_1556_242: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_243: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 7
  },
  View_1617_7: {
    width: 357,
    minWidth: 357,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 345
  },
  View_1556_244: {
    width: 87,
    minWidth: 87,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_245: {
    width: 87,
    minWidth: 87,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 1
  },
  Text_1556_245: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_246: {
    width: 357,
    minWidth: 357,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_247: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 1
  },
  Text_1556_247: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_248: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 7
  },
  View_1617_8: {
    width: 357,
    minWidth: 357,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 400
  },
  View_1556_249: {
    width: 87,
    minWidth: 87,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_250: {
    width: 87,
    minWidth: 87,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 1
  },
  Text_1556_250: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_251: {
    width: 357,
    minWidth: 357,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_252: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 1
  },
  Text_1556_252: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_253: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 7
  },
  View_1617_9: {
    width: 357,
    minWidth: 357,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 455
  },
  View_1556_254: {
    width: 87,
    minWidth: 87,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_255: {
    width: 87,
    minWidth: 87,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 1
  },
  Text_1556_255: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_256: {
    width: 357,
    minWidth: 357,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_257: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 1
  },
  Text_1556_257: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_258: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 7
  },
  View_1617_10: {
    width: 357,
    minWidth: 357,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 510
  },
  View_1556_259: {
    width: 87,
    minWidth: 87,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_260: {
    width: 87,
    minWidth: 87,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 1
  },
  Text_1556_260: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_261: {
    width: 357,
    minWidth: 357,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_262: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 1
  },
  Text_1556_262: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_263: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 7
  },
  View_1556_270: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 663
  },
  ImageBackground_1556_271: {
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
  ImageBackground_1556_272: {
    width: 13.083869934082031,
    height: 15.600000381469727,
    top: 7.2001953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.4000244140625
  },
  View_1617_3: {
    width: 55,
    minWidth: 55,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 22,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1556_269: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 18,
    resizeMode: "cover"
  },
  View_2: { height: 1151 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
