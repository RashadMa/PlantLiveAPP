import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ArrowDown from '../../assets/svgs/ArrowDown'
import Like from '../../assets/svgs/Like'
import Star from '../../assets/svgs/Star'

const Homescreen = ({ navigation }: any) => {
      const datas = [
            {
                  id: 1,
                  name: 'Echeveria',
                  price: 25,
                  rate: 5,
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis maximus massa. Donec quis maximus massa.',
                  image: "https://s3-alpha-sig.figma.com/img/7e9f/e847/354429ca82464acd6f7d06030ceb323e?Expires=1690156800&Signature=a0-9zqfaYshZ-8DEIfHeff2kTtwlki6U48RmygX-KfbqwQ147EtqhiBMMZoczdOrxdEu5XG7FMkvNlRpUIKe0o1aHPIVXbgyB-3~ywomBymHRcBgzMZ-cc4HgsUX4WEew8AIhUvmPxboELGA3lt7eWgujrELk9AoJG5Zimq006K3HeY759uQr42znPWLtZ7Lta2OnxLuqma8T2mhqoZBN6qOFZB7lW9AYfG~orfWEhTZnf2ApW5Tt9~a5GHd9JvN7kJ5NFhChXemV9MX4ZhoZi5gSD~2EFNBuY23LmDJZK9z0E1RSfigccAWTOf5b2-W1E5LOs~pCHD8wJQLhHzoKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            },
            {
                  id: 2,
                  name: 'Prickly Pear',
                  price: 20,
                  rate: 4,
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis maximus massa. Donec quis maximus massa.',
                  image: "https://s3-alpha-sig.figma.com/img/d83e/bf63/f949b281f841079771c1bdbd0aef5d55?Expires=1690156800&Signature=SKVIyiYIID-gwaaOe4fGxXGINM~5EHsgTkHpepcfFPrvK47xuKTgBF9Ih2lnUP6WAmGBjrZ~zFte92-~APwmmMkRtGkmVOvgZpypNInv-M~vW5F6NgZvsLYK8mNEdGv09iEmiP7WZVt-Uel~PBTvZb4pvZp9-orLLg3rwlw0UKYHJBbtCkWNuHev14je3DEREo3HrjkjWOT7PS4nK-Vx8K8u-SltJKX1O9HvgVFuVWney25ODjXVAuzA8CeNq7lWUiNoCKY7M9CpBfmzTdp3mfm-eLe8PljrL70qnV9zX5HcUjEmpmta5GYw7QNWVACSZFljIoS2CSwG7UPnXnZkbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            },
            {
                  id: 3,
                  name: 'Sansevieria',
                  price: 25,
                  rate: 5,
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis maximus massa. Donec quis maximus massa.',
                  image: "https://s3-alpha-sig.figma.com/img/f9e1/251c/6adb5e78db5af7185f919b58d34bf1e7?Expires=1690156800&Signature=K3IioSq-58rSkHTS1POYO8dMmGS55-nWw9NkECBZjRFzZJp9XHgxRaG45oJHLsjgqHHwEZ-Anj6p9FEedUVYEXbN9wqmmWaXZUFAiXxTyKIGbFsIf6tZV87r3aouxkJtusNDifhBFkXf~ym7Am3iXj75uwQCuLh6a3XIvieXRHIiT5PmGZCzrEmBQ~CXvDkSGWip58ffTLbS4yZfbH15NGFiDOM5xmSAEjDphRF09eRInSp4Zu7FNOkH6p1jybGm12ErWITA0mwYuTNgCFHqQuKQaX2zyeJz0uJMyATwX3aTDnMCTvNLcOofAkL5WlIpUZwSAQ07hf3yU5DKvjXGWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            },
            {
                  id: 4,
                  name: 'Monstera',
                  price: 25,
                  rate: 5,
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis maximus massa. Donec quis maximus massa.',
                  image: "https://s3-alpha-sig.figma.com/img/f9e1/251c/6adb5e78db5af7185f919b58d34bf1e7?Expires=1690156800&Signature=K3IioSq-58rSkHTS1POYO8dMmGS55-nWw9NkECBZjRFzZJp9XHgxRaG45oJHLsjgqHHwEZ-Anj6p9FEedUVYEXbN9wqmmWaXZUFAiXxTyKIGbFsIf6tZV87r3aouxkJtusNDifhBFkXf~ym7Am3iXj75uwQCuLh6a3XIvieXRHIiT5PmGZCzrEmBQ~CXvDkSGWip58ffTLbS4yZfbH15NGFiDOM5xmSAEjDphRF09eRInSp4Zu7FNOkH6p1jybGm12ErWITA0mwYuTNgCFHqQuKQaX2zyeJz0uJMyATwX3aTDnMCTvNLcOofAkL5WlIpUZwSAQ07hf3yU5DKvjXGWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
      ]
      const renderItem = ({ item }: any) => {
            return <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('plantdetail', { id: item.id })} style={{ width: 113, height: 72, backgroundColor: '#F2F7FF', borderRadius: 10 }}>
                        <Image style={{ width: 97, height: 88, position: 'absolute', bottom: 0, resizeMode: "cover" }} source={{ uri: item.image }} />
                        <TouchableOpacity style={{ width: 24, height: 24, position: 'relative' }}>
                              <Like style={{
                                    position: 'absolute',
                                    bottom: -37,
                                    left: 80,
                              }} />
                        </TouchableOpacity>
                  </TouchableOpacity>
                  <View style={{ marginLeft: 15, marginTop: 5 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', lineHeight: 20, marginBottom: 4 }}>{item.name}</Text>
                        <View style={{ flexDirection: "row", marginBottom: 8 }}>
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                        </View>
                        <Text style={{ color: 'black', fontSize: 13, fontWeight: '400', lineHeight: 16 }}>{item.price} $</Text>
                  </View>
            </View>
      }

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
                              <FlatList
                                    data={datas}
                                    renderItem={renderItem}
                              />
                        </>
                  </View>
            </SafeAreaView>
      )
}

export default Homescreen

const styles = StyleSheet.create({})