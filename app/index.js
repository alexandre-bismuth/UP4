import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
    Soonevents, Popularevents, ScreenFooterBtn, Welcome 
} from '../components';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options= {{
          footerStyle: {backgroundColor: COLORS.lightWhite},
          footerShadowVisible: false,
          footerLeft : () => (
            <ScreenFooterBtn iconUrl={icons.menu} dimension="60%" />
          ),
          footerRight : () => (
            <ScreenFooterBtn iconUrl={icons.profile} dimension="100%" />
          ),
          footerTitle:""
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