namespace $ { export class $my_option extends $mol_book {

	/// placeholder_title @ \They will teach you to earn!
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
	/// 	photo_count 0
	selected_data() {
		return ({
			"name" :  "" ,
			"greeting" :  [] as any[] ,
			"photo_count" :  0 ,
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

	/// greeting_0 @ \Hi, my name is Kate. Do you bid on call or put?
	greeting_0() {
		return $mol_locale.text( this.locale_contexts() , "greeting_0" )
	}

	/// greeting_1 @ \Guessed, here your reward)
	greeting_1() {
		return $mol_locale.text( this.locale_contexts() , "greeting_1" )
	}

	/// greeting_2 @ \You're embarrassing me..
	greeting_2() {
		return $mol_locale.text( this.locale_contexts() , "greeting_2" )
	}

	/// greeting_3 @ \You are awesome! Continue in [the real game](https://iqoption.com/)?
	greeting_3() {
		return $mol_locale.text( this.locale_contexts() , "greeting_3" )
	}

	/// rooms_data * 
	/// 	GBPCHF * 
	/// 		name \GBP / CHF
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	GBPJPY * 
	/// 		name \GBP / JPY
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	NZDUSD * 
	/// 		name \NZD / USD
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	USDCAD * 
	/// 		name \USD / CAD
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	USDCHF * 
	/// 		name \USD / CHF
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	USDJPY * 
	/// 		name \USD / JPY
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	USDRUB * 
	/// 		name \USD / RUB
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	XAGUSD * 
	/// 		name \XAG / USD
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4
	rooms_data() {
		return ({
			"GBPCHF" :  ({
			"name" :  "GBP / CHF" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
			"GBPJPY" :  ({
			"name" :  "GBP / JPY" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
			"NZDUSD" :  ({
			"name" :  "NZD / USD" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
			"USDCAD" :  ({
			"name" :  "USD / CAD" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
			"USDCHF" :  ({
			"name" :  "USD / CHF" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
			"USDJPY" :  ({
			"name" :  "USD / JPY" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
			"USDRUB" :  ({
			"name" :  "USD / RUB" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
			"XAGUSD" :  ({
			"name" :  "XAG / USD" ,
			"greeting" :  [].concat( this.greeting_0() , this.greeting_1() , this.greeting_2() , this.greeting_3() ) ,
			"photo_count" :  4 ,
		}) ,
		})
	}

} }

