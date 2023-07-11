import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowDown from '../../assets/svgs/ArrowDown'
import Like from '../../assets/svgs/Like'
import Star from '../../assets/svgs/Star'

const Homescreen = () => {
      return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
                  <View style={{ margin: 20, flex: 1 }}>

                        <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 20, }}>All Plants</Text>
                        <Text style={{ fontSize: 32, fontWeight: '500', }}>Plant</Text>
                        <Text style={{ fontSize: 32, fontWeight: '500', marginBottom: 15, }}>is for room</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                              <Text style={{ opacity: 0.50, color: 'black', fontSize: 12, fontWeight: '500', lineHeight: 20 }}>Popularity</Text>
                              <ArrowDown style={{ marginTop: 8 }} />
                        </View>
                        <>
                              <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <View style={{ width: 113, height: 72, backgroundColor: '#F2F7FF', borderRadius: 10 }}>
                                          <Image style={{ width: 97, height: 88, position: 'absolute', bottom: 0 }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/7e9f/e847/354429ca82464acd6f7d06030ceb323e?Expires=1690156800&Signature=a0-9zqfaYshZ-8DEIfHeff2kTtwlki6U48RmygX-KfbqwQ147EtqhiBMMZoczdOrxdEu5XG7FMkvNlRpUIKe0o1aHPIVXbgyB-3~ywomBymHRcBgzMZ-cc4HgsUX4WEew8AIhUvmPxboELGA3lt7eWgujrELk9AoJG5Zimq006K3HeY759uQr42znPWLtZ7Lta2OnxLuqma8T2mhqoZBN6qOFZB7lW9AYfG~orfWEhTZnf2ApW5Tt9~a5GHd9JvN7kJ5NFhChXemV9MX4ZhoZi5gSD~2EFNBuY23LmDJZK9z0E1RSfigccAWTOf5b2-W1E5LOs~pCHD8wJQLhHzoKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
                                          <View style={{ width: 24, height: 24, position: 'relative' }}>
                                                <Like style={{
                                                      position: 'absolute',
                                                      bottom: -37,
                                                      left: 80,
                                                }} />
                                          </View>
                                    </View>
                                    <View style={{ marginLeft: 15, marginTop: 5 }}>
                                          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', lineHeight: 20, marginBottom: 4 }}>Echeveria</Text>
                                          <View style={{ flexDirection: "row", marginBottom: 8 }}>
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                          </View>
                                          <Text style={{ color: 'black', fontSize: 13, fontWeight: '400', lineHeight: 16 }}>25 $</Text>
                                    </View>
                              </View>
                              <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <View style={{ width: 113, height: 72, backgroundColor: '#F2F7FF', borderRadius: 10 }}>
                                          <Image style={{ width: 97, height: 88, position: 'absolute', bottom: 0 }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/7e9f/e847/354429ca82464acd6f7d06030ceb323e?Expires=1690156800&Signature=a0-9zqfaYshZ-8DEIfHeff2kTtwlki6U48RmygX-KfbqwQ147EtqhiBMMZoczdOrxdEu5XG7FMkvNlRpUIKe0o1aHPIVXbgyB-3~ywomBymHRcBgzMZ-cc4HgsUX4WEew8AIhUvmPxboELGA3lt7eWgujrELk9AoJG5Zimq006K3HeY759uQr42znPWLtZ7Lta2OnxLuqma8T2mhqoZBN6qOFZB7lW9AYfG~orfWEhTZnf2ApW5Tt9~a5GHd9JvN7kJ5NFhChXemV9MX4ZhoZi5gSD~2EFNBuY23LmDJZK9z0E1RSfigccAWTOf5b2-W1E5LOs~pCHD8wJQLhHzoKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
                                          <View style={{ width: 24, height: 24, position: 'relative' }}>
                                                <Like style={{
                                                      position: 'absolute',
                                                      bottom: -37,
                                                      left: 80,
                                                }} />
                                          </View>
                                    </View>
                                    <View style={{ marginLeft: 15, marginTop: 5 }}>
                                          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', lineHeight: 20, marginBottom: 4 }}>Echeveria</Text>
                                          <View style={{ flexDirection: "row", marginBottom: 8 }}>
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                          </View>
                                          <Text style={{ color: 'black', fontSize: 13, fontWeight: '400', lineHeight: 16 }}>25 $</Text>
                                    </View>
                              </View>
                              <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <View style={{ width: 113, height: 72, backgroundColor: '#F2F7FF', borderRadius: 10 }}>
                                          <Image style={{ width: 97, height: 88, position: 'absolute', bottom: 0 }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/7e9f/e847/354429ca82464acd6f7d06030ceb323e?Expires=1690156800&Signature=a0-9zqfaYshZ-8DEIfHeff2kTtwlki6U48RmygX-KfbqwQ147EtqhiBMMZoczdOrxdEu5XG7FMkvNlRpUIKe0o1aHPIVXbgyB-3~ywomBymHRcBgzMZ-cc4HgsUX4WEew8AIhUvmPxboELGA3lt7eWgujrELk9AoJG5Zimq006K3HeY759uQr42znPWLtZ7Lta2OnxLuqma8T2mhqoZBN6qOFZB7lW9AYfG~orfWEhTZnf2ApW5Tt9~a5GHd9JvN7kJ5NFhChXemV9MX4ZhoZi5gSD~2EFNBuY23LmDJZK9z0E1RSfigccAWTOf5b2-W1E5LOs~pCHD8wJQLhHzoKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
                                          <View style={{ width: 24, height: 24, position: 'relative' }}>
                                                <Like style={{
                                                      position: 'absolute',
                                                      bottom: -37,
                                                      left: 80,
                                                }} />
                                          </View>
                                    </View>
                                    <View style={{ marginLeft: 15, marginTop: 5 }}>
                                          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', lineHeight: 20, marginBottom: 4 }}>Echeveria</Text>
                                          <View style={{ flexDirection: "row", marginBottom: 8 }}>
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                          </View>
                                          <Text style={{ color: 'black', fontSize: 13, fontWeight: '400', lineHeight: 16 }}>25 $</Text>
                                    </View>
                              </View>
                              <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <View style={{ width: 113, height: 72, backgroundColor: '#F2F7FF', borderRadius: 10 }}>
                                          <Image style={{ width: 97, height: 88, position: 'absolute', bottom: 0 }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/7e9f/e847/354429ca82464acd6f7d06030ceb323e?Expires=1690156800&Signature=a0-9zqfaYshZ-8DEIfHeff2kTtwlki6U48RmygX-KfbqwQ147EtqhiBMMZoczdOrxdEu5XG7FMkvNlRpUIKe0o1aHPIVXbgyB-3~ywomBymHRcBgzMZ-cc4HgsUX4WEew8AIhUvmPxboELGA3lt7eWgujrELk9AoJG5Zimq006K3HeY759uQr42znPWLtZ7Lta2OnxLuqma8T2mhqoZBN6qOFZB7lW9AYfG~orfWEhTZnf2ApW5Tt9~a5GHd9JvN7kJ5NFhChXemV9MX4ZhoZi5gSD~2EFNBuY23LmDJZK9z0E1RSfigccAWTOf5b2-W1E5LOs~pCHD8wJQLhHzoKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
                                          <View style={{ width: 24, height: 24, position: 'relative' }}>
                                                <Like style={{
                                                      position: 'absolute',
                                                      bottom: -37,
                                                      left: 80,
                                                }} />
                                          </View>
                                    </View>
                                    <View style={{ marginLeft: 15, marginTop: 5 }}>
                                          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', lineHeight: 20, marginBottom: 4 }}>Echeveria</Text>
                                          <View style={{ flexDirection: "row", marginBottom: 8 }}>
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                          </View>
                                          <Text style={{ color: 'black', fontSize: 13, fontWeight: '400', lineHeight: 16 }}>25 $</Text>
                                    </View>
                              </View>
                              <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <View style={{ width: 113, height: 72, backgroundColor: '#F2F7FF', borderRadius: 10 }}>
                                          <Image style={{ width: 97, height: 88, position: 'absolute', bottom: 0 }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/7e9f/e847/354429ca82464acd6f7d06030ceb323e?Expires=1690156800&Signature=a0-9zqfaYshZ-8DEIfHeff2kTtwlki6U48RmygX-KfbqwQ147EtqhiBMMZoczdOrxdEu5XG7FMkvNlRpUIKe0o1aHPIVXbgyB-3~ywomBymHRcBgzMZ-cc4HgsUX4WEew8AIhUvmPxboELGA3lt7eWgujrELk9AoJG5Zimq006K3HeY759uQr42znPWLtZ7Lta2OnxLuqma8T2mhqoZBN6qOFZB7lW9AYfG~orfWEhTZnf2ApW5Tt9~a5GHd9JvN7kJ5NFhChXemV9MX4ZhoZi5gSD~2EFNBuY23LmDJZK9z0E1RSfigccAWTOf5b2-W1E5LOs~pCHD8wJQLhHzoKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
                                          <View style={{ width: 24, height: 24, position: 'relative' }}>
                                                <Like style={{
                                                      position: 'absolute',
                                                      bottom: -37,
                                                      left: 80,
                                                }} />
                                          </View>
                                    </View>
                                    <View style={{ marginLeft: 15, marginTop: 5 }}>
                                          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', lineHeight: 20, marginBottom: 4 }}>Echeveria</Text>
                                          <View style={{ flexDirection: "row", marginBottom: 8 }}>
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                          </View>
                                          <Text style={{ color: 'black', fontSize: 13, fontWeight: '400', lineHeight: 16 }}>25 $</Text>
                                    </View>
                              </View>
                        </>

                  </View>
            </SafeAreaView>
      )
}

export default Homescreen

const styles = StyleSheet.create({})