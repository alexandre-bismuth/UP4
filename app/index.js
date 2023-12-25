import { useState } from 'react';
import { View, Text, ScroolView, SafeAreaView } from 'react-native';
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
              options= {{footerStyle: {backgroundColor: COLORS.lightWhite}}}
            />
        </SafeAreaView>
    )
}

export default Home;