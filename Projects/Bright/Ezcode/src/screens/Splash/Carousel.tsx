<Carousel
loop
vertical
style={{
  flex: 1,
  width: PAGE_WIDTH,
  height: PAGE_HEIGHT - 160,
  justifyContent: 'center',
}}
width={ITEM_WIDTH}
ref={refCarousel}
pagingEnabled={false}
height={ITEM_HEIGHT}
data={DATA}
onSnapToItem={e => setActive(e)}
renderItem={({index, item}) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.item}
      onPress={() => {
        setActive(index);
        refCarousel.current?.scrollTo({
          index: index,
          animated: true,
          count: index,
        });
      }}>
      <LayoutCustom level="5" style={styles.layout}>
        <View style={styles.textLayout}>
          <Text
            category="h4"
            center
            status={active === index ? 'danger' : 'basic'}
            marginHorizontal={8}
            style={{
              maxWidth: ITEM_WIDTH * 0.45,
            }}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            width: ITEM_WIDTH * 0.6,
            height: ITEM_HEIGHT - 8,
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            style={{
              width: ITEM_WIDTH * 0.6,
              height: ITEM_HEIGHT - 8,
              borderRadius: 16,
              marginRight: 5,
              backgroundColor: '#FFFFFF',
            }}
            source={item.image}
          />
        </View>
      </LayoutCustom>
    </TouchableOpacity>
  );
}}
customAnimation={animationStyle}
/>