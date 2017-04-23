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

	/// greeting_GBPJPY_0 @ \Hi, my name is Anita. Do you bid on call or put?
	greeting_GBPJPY_0() {
		return $mol_locale.text( this.locale_contexts() , "greeting_GBPJPY_0" )
	}

	/// greeting_GBPJPY_1 @ \Guessed, here your reward)
	greeting_GBPJPY_1() {
		return $mol_locale.text( this.locale_contexts() , "greeting_GBPJPY_1" )
	}

	/// greeting_GBPJPY_2 @ \You're embarrassing me..
	greeting_GBPJPY_2() {
		return $mol_locale.text( this.locale_contexts() , "greeting_GBPJPY_2" )
	}

	/// greeting_GBPJPY_3 @ \You're cool!
	greeting_GBPJPY_3() {
		return $mol_locale.text( this.locale_contexts() , "greeting_GBPJPY_3" )
	}

	/// greeting_GBPJPY_4 @ \You are awesome! Continue in [the real game](https://iqoption.com/)?
	greeting_GBPJPY_4() {
		return $mol_locale.text( this.locale_contexts() , "greeting_GBPJPY_4" )
	}

	/// greeting_NZDUSD_0 @ \Hi, my name is Beata. Do you bid on call or put?
	greeting_NZDUSD_0() {
		return $mol_locale.text( this.locale_contexts() , "greeting_NZDUSD_0" )
	}

	/// greeting_NZDUSD_1 @ \Guessed, here your reward)
	greeting_NZDUSD_1() {
		return $mol_locale.text( this.locale_contexts() , "greeting_NZDUSD_1" )
	}

	/// greeting_NZDUSD_2 @ \You are awesome! Continue in [the real game](https://iqoption.com/)?
	greeting_NZDUSD_2() {
		return $mol_locale.text( this.locale_contexts() , "greeting_NZDUSD_2" )
	}

	/// greeting_USDCAD_0 @ \Hi, my name is Cinderella. Do you bid on call or put?
	greeting_USDCAD_0() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDCAD_0" )
	}

	/// greeting_USDCAD_1 @ \Guessed, here your reward)
	greeting_USDCAD_1() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDCAD_1" )
	}

	/// greeting_USDCAD_2 @ \Nice choice!
	greeting_USDCAD_2() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDCAD_2" )
	}

	/// greeting_USDCAD_3 @ \You're embarrassing me..
	greeting_USDCAD_3() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDCAD_3" )
	}

	/// greeting_USDCAD_4 @ \You're cool!
	greeting_USDCAD_4() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDCAD_4" )
	}

	/// greeting_USDCAD_5 @ \You are awesome! Continue in [the real game](https://iqoption.com/)?
	greeting_USDCAD_5() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDCAD_5" )
	}

	/// greeting_USDJPY_0 @ \Hi, my name is Dafna. Do you bid on call or put?
	greeting_USDJPY_0() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDJPY_0" )
	}

	/// greeting_USDJPY_1 @ \Guessed, here your reward)
	greeting_USDJPY_1() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDJPY_1" )
	}

	/// greeting_USDJPY_2 @ \Nice choice!
	greeting_USDJPY_2() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDJPY_2" )
	}

	/// greeting_USDJPY_3 @ \You're embarrassing me..
	greeting_USDJPY_3() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDJPY_3" )
	}

	/// greeting_USDJPY_4 @ \You are awesome! Continue in [the real game](https://iqoption.com/)?
	greeting_USDJPY_4() {
		return $mol_locale.text( this.locale_contexts() , "greeting_USDJPY_4" )
	}

	/// rooms_data * 
	/// 	- GBPCHF * 
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
	/// 			<= greeting_GBPJPY_0 
	/// 			<= greeting_GBPJPY_1 
	/// 			<= greeting_GBPJPY_2 
	/// 			<= greeting_GBPJPY_3 
	/// 			<= greeting_GBPJPY_4 
	/// 		photo_count 5 
	/// 	NZDUSD * 
	/// 		name \NZD / USD
	/// 		greeting / 
	/// 			<= greeting_NZDUSD_0 
	/// 			<= greeting_NZDUSD_1 
	/// 			<= greeting_NZDUSD_2 
	/// 		photo_count 3 
	/// 	USDCAD * 
	/// 		name \USD / CAD
	/// 		greeting / 
	/// 			<= greeting_USDCAD_0 
	/// 			<= greeting_USDCAD_1 
	/// 			<= greeting_USDCAD_2 
	/// 			<= greeting_USDCAD_3 
	/// 			<= greeting_USDCAD_4 
	/// 			<= greeting_USDCAD_5 
	/// 		photo_count 6 
	/// 	- USDCHF * 
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
	/// 			<= greeting_USDJPY_0 
	/// 			<= greeting_USDJPY_1 
	/// 			<= greeting_USDJPY_2 
	/// 			<= greeting_USDJPY_3 
	/// 			<= greeting_USDJPY_4 
	/// 		photo_count 5 
	/// 	- USDRUB * 
	/// 		name \USD / RUB
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4 
	/// 	- XAGUSD * 
	/// 		name \XAG / USD
	/// 		greeting / 
	/// 			<= greeting_0 
	/// 			<= greeting_1 
	/// 			<= greeting_2 
	/// 			<= greeting_3 
	/// 		photo_count 4
	rooms_data() {
		return ({
			"GBPJPY" :  ({
			"name" :  "GBP / JPY" ,
			"greeting" :  [].concat( this.greeting_GBPJPY_0() , this.greeting_GBPJPY_1() , this.greeting_GBPJPY_2() , this.greeting_GBPJPY_3() , this.greeting_GBPJPY_4() ) ,
			"photo_count" :  5 ,
		}) ,
			"NZDUSD" :  ({
			"name" :  "NZD / USD" ,
			"greeting" :  [].concat( this.greeting_NZDUSD_0() , this.greeting_NZDUSD_1() , this.greeting_NZDUSD_2() ) ,
			"photo_count" :  3 ,
		}) ,
			"USDCAD" :  ({
			"name" :  "USD / CAD" ,
			"greeting" :  [].concat( this.greeting_USDCAD_0() , this.greeting_USDCAD_1() , this.greeting_USDCAD_2() , this.greeting_USDCAD_3() , this.greeting_USDCAD_4() , this.greeting_USDCAD_5() ) ,
			"photo_count" :  6 ,
		}) ,
			"USDJPY" :  ({
			"name" :  "USD / JPY" ,
			"greeting" :  [].concat( this.greeting_USDJPY_0() , this.greeting_USDJPY_1() , this.greeting_USDJPY_2() , this.greeting_USDJPY_3() , this.greeting_USDJPY_4() ) ,
			"photo_count" :  5 ,
		}) ,
		})
	}

} }

