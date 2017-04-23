namespace $ { export class $my_option extends $mol_book {

	/// placeholder_title @ \Они научит тебя зарабатывать!
	placeholder_title() {
		return $mol_locale.text( this.locale_contexts() , "placeholder_title" )
	}

	/// Placeholder $mol_book_placeholder title <= placeholder_title
	@ $mol_mem()
	Placeholder() {
		return new $mol_book_placeholder().setup( obj => { 
			obj.title = () => this.placeholder_title()
		} )
	}

	/// Rooms $my_option_rooms rooms_data <= rooms_data
	@ $mol_mem()
	Rooms() {
		return new $my_option_rooms().setup( obj => { 
			obj.rooms_data = () => this.rooms_data()
		} )
	}

	/// selected_id \
	selected_id() {
		return ""
	}

	/// selected_data * 
	/// 	name \
	/// 	greeting / 
	/// 	avatar \
	/// 	photos /
	selected_data() {
		return ({
			"name" :  "" ,
			"greeting" :  [] as any[] ,
			"avatar" :  "" ,
			"photos" :  [] as any[] ,
		})
	}

	/// Room $my_option_room 
	/// 	id <= selected_id 
	/// 	data <= selected_data
	@ $mol_mem()
	Room() {
		return new $my_option_room().setup( obj => { 
			obj.id = () => this.selected_id()
			obj.data = () => this.selected_data()
		} )
	}

	/// pages / 
	/// 	<= Placeholder 
	/// 	<= Rooms 
	/// 	<= Room
	pages() {
		return [].concat( this.Placeholder() , this.Rooms() , this.Room() )
	}

	/// greeting_0 @ \Привет, меня зовут Катя. Ставишь на рост или понижение?
	greeting_0() {
		return $mol_locale.text( this.locale_contexts() , "greeting_0" )
	}

	/// greeting_1 @ \Угадал, держи свою награду)
	greeting_1() {
		return $mol_locale.text( this.locale_contexts() , "greeting_1" )
	}

	/// greeting_2 @ \Ты меня смущаешь..
	greeting_2() {
		return $mol_locale.text( this.locale_contexts() , "greeting_2" )
	}

	/// greeting_3 @ \Ты просто мастер! Продолжим в [реальной игре](https://iqoption.com/)?
	greeting_3() {
		return $mol_locale.text( this.locale_contexts() , "greeting_3" )
	}

	/// rooms_data * 
	/// 	EUR-RUR * 
	/// 		name \Евро - Рубль
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		avatar \/my/option/image/EUR/avatar.jpg
	/// 		photos / 
	/// 			\/my/option/image/EUR/1.jpg
	/// 			\/my/option/image/EUR/2.jpg
	/// 			\/my/option/image/EUR/3.jpg
	/// 			\/my/option/image/EUR/4.jpg
	/// 	USD-RUR * 
	/// 		name \Доллар - Рубль
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		avatar \/my/option/image/EUR/avatar.jpg
	/// 		photos / 
	/// 			\/my/option/image/EUR/1.jpg
	/// 			\/my/option/image/EUR/2.jpg
	/// 			\/my/option/image/EUR/3.jpg
	/// 			\/my/option/image/EUR/4.jpg
	rooms_data() {
		return ({
			"EUR-RUR" :  ({
			"name" :  "Евро - Рубль" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"avatar" :  "/my/option/image/EUR/avatar.jpg" ,
			"photos" :  [].concat( "/my/option/image/EUR/1.jpg" , "/my/option/image/EUR/2.jpg" , "/my/option/image/EUR/3.jpg" , "/my/option/image/EUR/4.jpg" ) ,
		}) ,
			"USD-RUR" :  ({
			"name" :  "Доллар - Рубль" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"avatar" :  "/my/option/image/EUR/avatar.jpg" ,
			"photos" :  [].concat( "/my/option/image/EUR/1.jpg" , "/my/option/image/EUR/2.jpg" , "/my/option/image/EUR/3.jpg" , "/my/option/image/EUR/4.jpg" ) ,
		}) ,
		})
	}

} }

