import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList, ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IconButton from "./src/IconButton";

import { List, Searchbar } from 'react-native-paper';

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [filteredData, setSearchQuery] = React.useState('');

  // const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e')
      .then((response) => response.json())
      .then((json) => setData(json.categories))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  search = (searchText) => {
    data.filter(function (item) {
      return item.categoryName.includes(searchText);
    });
    setData(filteredData)
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, backgroundColor: '#E9E8EE' }}>
        <IconButton
          iconButtonStyle={styles.clearBtn}
          // iconColor="#ffffff"
          iconName="clear"
          iconSize={40}
          materialIcon
        />
        <IconButton
          iconButtonStyle={styles.msgIcon}
          iconColor="#ffffff"
          iconName="message"
          iconSize={20}
          materialIcon
        />

        <Text style={styles.sectionTitle2}>Approved Foods List</Text>

        <View style={{ flex: 1, padding: 24 }}>
          <Searchbar placeholder="Try searching fat, sauces,names...."
            style={{ backgroundColor: '#E7EEF4' }}
            lightTheme
            round
            onChangeText={text => this.search(text)}
          //value={searchQuery}
          />
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={filteredData && filteredData.length > 0 ? filteredData : data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                // <Text style={{ color: item.category.colorCode }}>{item.category.categoryName}</Text>
                <List.Section style={{ backgroundColor: '#FEFEFE' }}>
                  <List.Accordion
                    title={item.category.categoryName}
                    titleStyle={{ color: item.category.colorCode }}
                    left={props => <List.Icon {...props} icon="folder" />}>
                    {item.category.subcategories.map((item2) =>
                      item2.items.map((item3) =>
                        <List.Item title={item3} style={{ backgroundColor: '#FEFEFE' }} />
                      )
                    )}

                  </List.Accordion>
                </List.Section>
              )}
            />
          )}
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    top: 30,
    flex:1,
    justifyContent:'center'
  },
  sectionTitle2:{
    marginTop: 32,
    paddingHorizontal: 24,
  //  flex:1,
    justifyContent:'center',
    fontSize: 32,
    fontWeight: '600',
    color: Colors.black,
    padding:24
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  msgIcon: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    top: 10,
    right: 10,
    height: 60,
    backgroundColor: "#1D82DC",
    borderRadius: 100,
    shadowColor: "rgba(46, 229, 157, 0.4)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 }
  },
  clearBtn: {
    //borderWidth: 1,
    // borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    top: 10,
    left: 10,
    height: 60,
    // backgroundColor: "#1D82DC",
    //  borderRadius: 100,
    // shadowColor: "rgba(46, 229, 157, 0.4)",
    //  shadowOpacity: 1.5,
    // elevation: 8,
    //shadowRadius: 20,
    // shadowOffset: { width: 1, height: 13 }
  }
});

export default App;
