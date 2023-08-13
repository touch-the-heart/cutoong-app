import React, { ReactNode } from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { colors, globalStyle } from '../config/globalStyle';

type Props = {
  type?: 'safe' | 'full';
  bgColor?: string; // 전체 배경색
  sbColor?: string; // safe 영역 제외한 부분 색
  children?: ReactNode;
  style?: object;
};

const CSScreen = ({
  type = 'safe',
  bgColor = colors.white,
  sbColor,
  style,
  children,
}: Props) => {
  const Container = type === 'safe' ? SafeAreaView : View;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: sbColor ? sbColor : bgColor,
      }}
    >
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={sbColor ? sbColor : bgColor}
      />

      <Container style={globalStyle.flexOne}>
        <View
          style={[globalStyle.flexOne, { backgroundColor: bgColor }, style]}
        >
          {children}
        </View>
      </Container>
    </View>
  );
};

export default CSScreen;
