import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES, FONT } from '../constants';
import { 
    Soonevents, Popularevents, ScreenHeaderBtn, ScreenFooterBtn, Welcome 
} from '../components';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        option={{headerStyle: {height: 600}}}
        options= {{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            height: 100,
          },
          HeaderShadowVisible: false,
          headerLeft : () => (
            <ScreenHeaderBtn iconUrl={images.profile} BtnDimension={40} ImgDimension = "100%" />
          ),
          headerRight : () => (
            <ScreenHeaderBtn text={"Filter"} BtnDimension='auto' padding={8}/>
          ),
          headerTitle: () => (
            <View>
              <Text style={{color: COLORS.primary, fontSize: SIZES.medium , fontFamily: FONT.bold}}>
                What are you up for today ? 
              </Text> 
            </View>           
          ),
        }}
      />
      <ScrollView showVerticalScrollIndicator={false}>
        <View 
          style={{
            flex:1,
            padding: SIZES.medium
          }}
        >
          <Welcome 
          
          />
          <Popularevents 
          
          />
          <Soonevents 
                    
          />
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}
    

export default Home;