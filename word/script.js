// 読み込んだ200語のデータ（自動で 1 から順に id が振られます）
const rawWordsData = [
	{ word: "anyway", meaning: "とにかく", level: 600, part: "副詞" },
	{ word: "following", meaning: "〜に続いて", level: 600, part: "前置詞" },
	{ word: "refer", meaning: "参照する", level: 600, part: "動詞" },
	{ word: "available", meaning: "利用できる", level: 600, part: "形容詞" },
	{ word: "department", meaning: "部門、売り場", level: 600, part: "名詞" },
	{ word: "conference", meaning: "会議", level: 600, part: "名詞" },
	{ word: "according to", meaning: "〜によると", level: 600, part: "前置詞" },
	{ word: "likely", meaning: "おそらく", level: 600, part: "副詞" },
	{ word: "offer", meaning: "提供する", level: 600, part: "動詞" },
	{ word: "equipment", meaning: "機器、設備", level: 600, part: "名詞" },
	{ word: "provide", meaning: "提供する", level: 600, part: "動詞" },
	{ word: "local", meaning: "地元の", level: 600, part: "形容詞" },
	{ word: "purchase", meaning: "購入する", level: 600, part: "動詞" },
	{ word: "opening", meaning: "空き、開店", level: 600, part: "名詞" },
	{ word: "construction", meaning: "建設", level: 600, part: "名詞" },
	{ word: "tour", meaning: "見学、旅行", level: 600, part: "名詞" },
	{ word: "research", meaning: "研究、調査", level: 600, part: "名詞" },
	{ word: "attend", meaning: "出席する", level: 600, part: "動詞" },
	{ word: "delivery", meaning: "配達", level: 600, part: "名詞" },
	{ word: "recently", meaning: "最近", level: 600, part: "副詞" },
	{ word: "indicate", meaning: "示す", level: 600, part: "動詞" },
	{ word: "employee", meaning: "従業員", level: 600, part: "名詞" },
	{ word: "additional", meaning: "追加の", level: 600, part: "形容詞" },
	{ word: "survey", meaning: "アンケート調査", level: 600, part: "名詞" },
	{ word: "review", meaning: "検討、論評", level: 600, part: "名詞" },
	{ word: "production", meaning: "生産、作品", level: 600, part: "名詞" },
	{ word: "located", meaning: "位置して", level: 600, part: "形容詞" },
	{ word: "detail", meaning: "詳細", level: 600, part: "名詞" },
	{ word: "announce", meaning: "発表する", level: 600, part: "動詞" },
	{ word: "repair", meaning: "修理", level: 600, part: "名詞" },
	{ word: "increase", meaning: "増やす", level: 600, part: "動詞" },
	{ word: "include", meaning: "含む", level: 600, part: "動詞" },
	{ word: "currently", meaning: "現在は", level: 600, part: "副詞" },
	{ word: "advertising", meaning: "広告、宣伝", level: 600, part: "名詞" },
	{ word: "charge", meaning: "料金、責任", level: 600, part: "名詞" },
	{ word: "expect", meaning: "予期する", level: 600, part: "動詞" },
	{ word: "firm", meaning: "会社", level: 600, part: "名詞" },
	{ word: "client", meaning: "顧客", level: 600, part: "名詞" },
	{ word: "financial", meaning: "財務の", level: 600, part: "形容詞" },
	{ word: "annual", meaning: "年に1度の", level: 600, part: "形容詞" },
	{ word: "payment", meaning: "支払い", level: 600, part: "名詞" },
	{ word: "budget", meaning: "予算", level: 600, part: "名詞" },
	{ word: "application", meaning: "応募、申請", level: 600, part: "名詞" },
	{ word: "contract", meaning: "契約", level: 600, part: "名詞" },
	{ word: "management", meaning: "経営、管理", level: 600, part: "名詞" },
	{ word: "performance", meaning: "業績", level: 600, part: "名詞" },
	{ word: "pleased", meaning: "喜んで", level: 600, part: "形容詞" },
	{ word: "confirm", meaning: "確認する", level: 600, part: "動詞" },
	{ word: "award", meaning: "賞", level: 600, part: "名詞" },
	{ word: "clothing", meaning: "衣類", level: 600, part: "名詞" },
	{ word: "display", meaning: "展示", level: 600, part: "名詞" },
	{ word: "candidate", meaning: "候補者", level: 600, part: "名詞" },
	{ word: "state", meaning: "述べる", level: 600, part: "動詞" },
	{ word: "exhibit", meaning: "展示物", level: 600, part: "名詞" },
	{ word: "session", meaning: "時間、集まり", level: 600, part: "名詞" },
	{ word: "note", meaning: "注意する", level: 600, part: "動詞" },
	{ word: "process", meaning: "過程、処理", level: 600, part: "名詞" },
	{ word: "instruction", meaning: "指示", level: 600, part: "名詞" },
	{ word: "membership", meaning: "会員資格", level: 600, part: "名詞" },
	{ word: "agency", meaning: "代理店、機関", level: 600, part: "名詞" },
	{ word: "based", meaning: "拠点のある", level: 600, part: "形容詞" },
	{ word: "facility", meaning: "施設", level: 600, part: "名詞" },
	{ word: "advance", meaning: "前進、事前", level: 600, part: "名詞" },
	{ word: "committee", meaning: "委員会", level: 600, part: "名詞" },
	{ word: "successful", meaning: "成功した", level: 600, part: "形容詞" },
	{ word: "excellent", meaning: "素晴らしい", level: 600, part: "形容詞" },
	{ word: "industry", meaning: "産業、業界", level: 600, part: "名詞" },
	{ word: "fee", meaning: "料金", level: 600, part: "名詞" },
	{ word: "accept", meaning: "受け入れる", level: 600, part: "動詞" },
	{ word: "upcoming", meaning: "今度の", level: 600, part: "形容詞" },
	{ word: "latest", meaning: "最新の", level: 600, part: "形容詞" },
	{ word: "submit", meaning: "提出する", level: 600, part: "動詞" },
	{ word: "transportation", meaning: "交通機関", level: 600, part: "名詞" },
	{ word: "resume", meaning: "履歴書", level: 600, part: "名詞" },
	{ word: "executive", meaning: "幹部", level: 600, part: "名詞" },
	{ word: "introduce", meaning: "導入する", level: 600, part: "動詞" },
	{ word: "previous", meaning: "以前の", level: 600, part: "形容詞" },
	{ word: "proposal", meaning: "提案", level: 600, part: "名詞" },
	{ word: "supply", meaning: "必需品、供給", level: 600, part: "名詞" },
	{ word: "enclose", meaning: "同封する", level: 600, part: "動詞" },
	{ word: "policy", meaning: "方針", level: 600, part: "名詞" },
	{ word: "register", meaning: "登録する", level: 600, part: "動詞" },
	{ word: "arrange", meaning: "手配する", level: 600, part: "動詞" },
	{ word: "bill", meaning: "請求書", level: 600, part: "名詞" },
	{ word: "hire", meaning: "雇う", level: 600, part: "動詞" },
	{ word: "approve", meaning: "承認する", level: 600, part: "動詞" },
	{ word: "conduct", meaning: "実施する", level: 600, part: "動詞" },
	{ word: "opportunity", meaning: "機会", level: 600, part: "名詞" },
	{ word: "deadline", meaning: "締め切り", level: 600, part: "名詞" },
	{ word: "corporate", meaning: "企業の", level: 600, part: "形容詞" },
	{ word: "warranty", meaning: "保証", level: 600, part: "名詞" },
	{ word: "necessary", meaning: "必要な", level: 600, part: "形容詞" },
	{ word: "reserve", meaning: "予約する", level: 600, part: "動詞" },
	{ word: "resident", meaning: "住民", level: 600, part: "名詞" },
	{ word: "create", meaning: "創造する", level: 600, part: "動詞" },
	{ word: "inform", meaning: "知らせる", level: 600, part: "動詞" },
	{ word: "allow", meaning: "許可する", level: 600, part: "動詞" },
	{ word: "mention", meaning: "述べる", level: 600, part: "動詞" },
	{ word: "appreciate", meaning: "感謝する", level: 600, part: "動詞" },
	{ word: "replacement", meaning: "交換、後任", level: 600, part: "名詞" },
	{ word: "update", meaning: "最新情報", level: 600, part: "名詞" },
	{ word: "branch", meaning: "支店", level: 600, part: "名詞" },
	{ word: "paid", meaning: "有給の", level: 600, part: "形容詞" },
	{ word: "unfortunately", meaning: "残念なことに", level: 600, part: "副詞" },
	{ word: "original", meaning: "元の", level: 600, part: "形容詞" },
	{ word: "rent", meaning: "家賃", level: 600, part: "名詞" },
	{ word: "memo", meaning: "社内文書", level: 600, part: "名詞" },
	{ word: "luggage", meaning: "荷物", level: 600, part: "名詞" },
	{ word: "editor", meaning: "編集者", level: 600, part: "名詞" },
	{ word: "exhibition", meaning: "展示会", level: 600, part: "名詞" },
	{ word: "leading", meaning: "主要な", level: 600, part: "形容詞" },
	{ word: "organization", meaning: "組織", level: 600, part: "名詞" },
	{ word: "release", meaning: "発売する", level: 600, part: "動詞" },
	{ word: "limited", meaning: "限られた", level: 600, part: "形容詞" },
	{ word: "procedure", meaning: "手順", level: 600, part: "名詞" },
	{ word: "experienced", meaning: "経験豊富な", level: 600, part: "形容詞" },
	{ word: "personnel", meaning: "人事、社員", level: 600, part: "名詞" },
	{ word: "author", meaning: "著者", level: 600, part: "名詞" },
	{ word: "benefit", meaning: "利益", level: 600, part: "名詞" },
	{ word: "focus", meaning: "集中させる", level: 600, part: "動詞" },
	{ word: "participate", meaning: "参加する", level: 600, part: "動詞" },
	{ word: "cause", meaning: "原因", level: 600, part: "名詞" },
	{ word: "degree", meaning: "学位、程度", level: 600, part: "名詞" },
	{ word: "directly", meaning: "直接", level: 600, part: "副詞" },
	{ word: "host", meaning: "主催者", level: 600, part: "名詞" },
	{ word: "expert", meaning: "専門家", level: 600, part: "名詞" },
	{ word: "impress", meaning: "感心させる", level: 600, part: "動詞" },
	{ word: "mainly", meaning: "主に", level: 600, part: "副詞" },
	{ word: "suggestion", meaning: "提案", level: 600, part: "名詞" },
	{ word: "supplier", meaning: "供給業者", level: 600, part: "名詞" },
	{ word: "document", meaning: "書類", level: 600, part: "名詞" },
	{ word: "remind", meaning: "思い出させる", level: 600, part: "動詞" },
	{ word: "require", meaning: "要求する", level: 600, part: "動詞" },
	{ word: "representative", meaning: "担当者", level: 600, part: "名詞" },
	{ word: "packaging", meaning: "梱包", level: 600, part: "名詞" },
	{ word: "description", meaning: "説明", level: 600, part: "名詞" },
	{ word: "property", meaning: "不動産", level: 600, part: "名詞" },
	{ word: "extension", meaning: "内線", level: 600, part: "名詞" },
	{ word: "inquire", meaning: "尋ねる", level: 600, part: "動詞" },
	{ word: "merchandise", meaning: "商品", level: 600, part: "名詞" },
	{ word: "highly", meaning: "非常に", level: 600, part: "副詞" },
	{ word: "result", meaning: "結果", level: 600, part: "名詞" },
	{ word: "assistance", meaning: "支援", level: 600, part: "名詞" },
	{ word: "encourage", meaning: "奨励する", level: 600, part: "動詞" },
	{ word: "individual", meaning: "個人", level: 600, part: "名詞" },
	{ word: "laboratory", meaning: "研究所", level: 600, part: "名詞" },
	{ word: "consider", meaning: "考慮する", level: 600, part: "動詞" },
	{ word: "headquarters", meaning: "本社", level: 600, part: "名詞" },
	{ word: "ship", meaning: "出荷する", level: 600, part: "動詞" },
	{ word: "commercial", meaning: "商業の", level: 600, part: "形容詞" },
	{ word: "device", meaning: "機器", level: 600, part: "名詞" },
	{ word: "intended", meaning: "意図された", level: 600, part: "形容詞" },
	{ word: "brochure", meaning: "パンフレット", level: 600, part: "名詞" },
	{ word: "mail", meaning: "郵便物", level: 600, part: "名詞" },
	{ word: "prefer", meaning: "〜を好む", level: 600, part: "動詞" },
	{ word: "response", meaning: "返答", level: 600, part: "名詞" },
	{ word: "region", meaning: "地域", level: 600, part: "名詞" },
	{ word: "donation", meaning: "寄付", level: 600, part: "名詞" },
	{ word: "quarter", meaning: "四半期", level: 600, part: "名詞" },
	{ word: "journal", meaning: "雑誌", level: 600, part: "名詞" },
	{ word: "distribute", meaning: "配布する", level: 600, part: "動詞" },
	{ word: "potential", meaning: "潜在的な", level: 600, part: "形容詞" },
	{ word: "reschedule", meaning: "スケジュールを変更する", level: 600, part: "動詞" },
	{ word: "renew", meaning: "更新する", level: 600, part: "動詞" },
	{ word: "warehouse", meaning: "倉庫", level: 600, part: "名詞" },
	{ word: "refund", meaning: "返金", level: 600, part: "名詞" },
	{ word: "advise", meaning: "忠告する", level: 600, part: "動詞" },
	{ word: "immediately", meaning: "すぐに", level: 600, part: "副詞" },
	{ word: "council", meaning: "議会", level: 600, part: "名詞" },
	{ word: "broadcast", meaning: "放送する", level: 600, part: "動詞" },
	{ word: "responsible", meaning: "責任がある", level: 600, part: "形容詞" },
	{ word: "avoid", meaning: "避ける", level: 600, part: "動詞" },
	{ word: "effective", meaning: "効果的な", level: 600, part: "形容詞" },
	{ word: "invitation", meaning: "招待", level: 600, part: "名詞" },
	{ word: "reduce", meaning: "減らす", level: 600, part: "動詞" },
	{ word: "vehicle", meaning: "乗り物", level: 600, part: "名詞" },
	{ word: "efficient", meaning: "効率的な", level: 600, part: "形容詞" },
	{ word: "manufacture", meaning: "製造する", level: 600, part: "動詞" },
	{ word: "comfortable", meaning: "快適な", level: 600, part: "形容詞" },
	{ word: "correct", meaning: "正確な", level: 600, part: "形容詞" },
	{ word: "downtown", meaning: "中心街", level: 600, part: "名詞" },
	{ word: "method", meaning: "方法", level: 600, part: "名詞" },
	{ word: "entire", meaning: "全体の", level: 600, part: "形容詞" },
	{ word: "range", meaning: "範囲", level: 600, part: "名詞" },
	{ word: "setting", meaning: "環境", level: 600, part: "名詞" },
	{ word: "apologize", meaning: "謝罪する", level: 600, part: "動詞" },
	{ word: "frequent", meaning: "頻繁な", level: 600, part: "形容詞" },
	{ word: "promotion", meaning: "昇進", level: 600, part: "名詞" },
	{ word: "regarding", meaning: "〜に関して", level: 600, part: "前置詞" },
	{ word: "temporary", meaning: "一時的な", level: 600, part: "形容詞" },
	{ word: "traditional", meaning: "伝統的な", level: 600, part: "形容詞" },
	{ word: "admission", meaning: "入場料", level: 600, part: "名詞" },
	{ word: "fit", meaning: "合う", level: 600, part: "動詞" },
	{ word: "reference", meaning: "照会先、参照", level: 600, part: "名詞" },
	{ word: "status", meaning: "状況", level: 600, part: "名詞" },
	{ word: "fuel", meaning: "燃料", level: 600, part: "名詞" },
	{ word: "nearly", meaning: "ほとんど", level: 600, part: "副詞" },
	{ word: "cafeteria", meaning: "社員食堂", level: 600, part: "名詞" },
	{ word: "determine", meaning: "決定する", level: 600, part: "動詞" },
	// -------------------------
	// 201〜300の単語
	// -------------------------
	{ word: "expense", meaning: "費用", level: 600, part: "名詞" },
	{ word: "overseas", meaning: "海外へ", level: 600, part: "副詞" },
	{ word: "satisfied", meaning: "満足した", level: 600, part: "形容詞" },
	{ word: "appear", meaning: "〜のように見える", level: 600, part: "動詞" },
	{ word: "develop", meaning: "開発する", level: 600, part: "動詞" },
	{ word: "improve", meaning: "改善する", level: 600, part: "動詞" },
	{ word: "reasonable", meaning: "妥当な", level: 600, part: "形容詞" },
	{ word: "unable", meaning: "〜できない", level: 600, part: "形容詞" },
	{ word: "delay", meaning: "遅らせる", level: 600, part: "動詞" },
	{ word: "legal", meaning: "合法の", level: 600, part: "形容詞" },
	{ word: "regulation", meaning: "規則", level: 600, part: "名詞" },
	{ word: "expand", meaning: "拡大する", level: 600, part: "動詞" },
	{ word: "launch", meaning: "開始する", level: 600, part: "動詞" },
	{ word: "recommendation", meaning: "推薦", level: 600, part: "名詞" },
	{ word: "direct", meaning: "直接の", level: 600, part: "形容詞" },
	{ word: "profit", meaning: "利益", level: 600, part: "名詞" },
	{ word: "seek", meaning: "探し求める", level: 600, part: "動詞" },
	{ word: "entry", meaning: "入場、エントリー", level: 600, part: "名詞" },
	{ word: "claim", meaning: "主張する", level: 600, part: "動詞" },
	{ word: "crew", meaning: "乗組員", level: 600, part: "名詞" },
	{ word: "demand", meaning: "需要", level: 600, part: "名詞" },
	{ word: "figure", meaning: "数字、人物", level: 600, part: "名詞" },
	{ word: "raise", meaning: "上げる", level: 600, part: "動詞" },
	{ word: "attach", meaning: "添付する", level: 600, part: "動詞" },
	{ word: "attract", meaning: "引きつける", level: 600, part: "動詞" },
	{ word: "insurance", meaning: "保険", level: 600, part: "名詞" },
	{ word: "departure", meaning: "出発", level: 600, part: "名詞" },
	{ word: "mayor", meaning: "市長", level: 600, part: "名詞" },
	{ word: "balance", meaning: "残高", level: 600, part: "名詞" },
	{ word: "estimate", meaning: "見積もる", level: 600, part: "動詞" },
	{ word: "district", meaning: "地区", level: 600, part: "名詞" },
	{ word: "former", meaning: "以前の", level: 600, part: "形容詞" },
	{ word: "modern", meaning: "現代の", level: 600, part: "形容詞" },
	{ word: "tip", meaning: "助言、チップ", level: 600, part: "名詞" },
	{ word: "establish", meaning: "設立する", level: 600, part: "動詞" },
	{ word: "option", meaning: "選択肢", level: 600, part: "名詞" },
	{ word: "retire", meaning: "退職する", level: 600, part: "動詞" },
	{ word: "search", meaning: "探す", level: 600, part: "動詞" },
	{ word: "specific", meaning: "具体的な", level: 600, part: "形容詞" },
	{ word: "agricultural", meaning: "農業の", level: 600, part: "形容詞" },
	{ word: "historical", meaning: "歴史的な", level: 600, part: "形容詞" },
	{ word: "helpful", meaning: "役立つ", level: 600, part: "形容詞" },
	{ word: "complaint", meaning: "苦情", level: 600, part: "名詞" },
	{ word: "related", meaning: "関連した", level: 600, part: "形容詞" },
	{ word: "simply", meaning: "単に", level: 600, part: "副詞" },
	{ word: "unique", meaning: "独特の", level: 600, part: "形容詞" },
	{ word: "concerning", meaning: "〜に関して", level: 600, part: "前置詞" },
	{ word: "reputation", meaning: "評判", level: 600, part: "名詞" },
	{ word: "ability", meaning: "能力", level: 600, part: "名詞" },
	{ word: "arrival", meaning: "到着", level: 600, part: "名詞" },
	{ word: "familiar", meaning: "よく知っている", level: 600, part: "形容詞" },
	{ word: "ideal", meaning: "理想的な", level: 600, part: "形容詞" },
	{ word: "maintain", meaning: "維持する", level: 600, part: "動詞" },
	{ word: "landscaping", meaning: "造園", level: 600, part: "名詞" },
	{ word: "organize", meaning: "組織する", level: 600, part: "動詞" },
	{ word: "significant", meaning: "重要な", level: 600, part: "形容詞" },
	{ word: "occasion", meaning: "機会、行事", level: 600, part: "名詞" },
	{ word: "standard", meaning: "基準", level: 600, part: "名詞" },
	{ word: "background", meaning: "背景", level: 600, part: "名詞" },
	{ word: "guided", meaning: "ガイド付きの", level: 600, part: "形容詞" },
	{ word: "advanced", meaning: "進歩した", level: 600, part: "形容詞" },
	{ word: "alternative", meaning: "代わりの", level: 600, part: "形容詞" },
	{ word: "confident", meaning: "自信がある", level: 600, part: "形容詞" },
	{ word: "decade", meaning: "10年間", level: 600, part: "名詞" },
	{ word: "initial", meaning: "最初の", level: 600, part: "形容詞" },
	{ word: "separate", meaning: "別々の", level: 600, part: "形容詞" },
	{ word: "celebration", meaning: "お祝い", level: 600, part: "名詞" },
	{ word: "concern", meaning: "懸念", level: 600, part: "名詞" },
	{ word: "environment", meaning: "環境", level: 600, part: "名詞" },
	{ word: "operate", meaning: "操作する", level: 600, part: "動詞" },
	{ word: "various", meaning: "さまざまな", level: 600, part: "形容詞" },
	{ word: "brief", meaning: "短い", level: 600, part: "形容詞" },
	{ word: "full-time", meaning: "常勤の", level: 600, part: "形容詞" },
	{ word: "overall", meaning: "全体の", level: 600, part: "形容詞" },
	{ word: "achieve", meaning: "達成する", level: 600, part: "動詞" },
	{ word: "basis", meaning: "基礎", level: 600, part: "名詞" },
	{ word: "complex", meaning: "複雑な", level: 600, part: "形容詞" },
	{ word: "delighted", meaning: "喜んで", level: 600, part: "形容詞" },
	{ word: "obtain", meaning: "得る", level: 600, part: "動詞" },
	{ word: "honor", meaning: "名誉", level: 600, part: "名詞" },
	{ word: "properly", meaning: "適切に", level: 600, part: "副詞" },
	{ word: "suitable", meaning: "適した", level: 600, part: "形容詞" },
	{ word: "electronic", meaning: "電子の", level: 600, part: "形容詞" },
	{ word: "finalize", meaning: "仕上げる", level: 600, part: "動詞" },
	{ word: "generous", meaning: "寛大な", level: 600, part: "形容詞" },
	{ word: "preparation", meaning: "準備", level: 600, part: "名詞" },
	{ word: "duty", meaning: "義務", level: 600, part: "名詞" },
	{ word: "earn", meaning: "稼ぐ", level: 600, part: "動詞" },
	{ word: "willing", meaning: "〜する気がある", level: 600, part: "形容詞" },
	{ word: "worth", meaning: "価値がある", level: 600, part: "前置詞" },
	{ word: "fund", meaning: "資金", level: 600, part: "名詞" },
	{ word: "overnight", meaning: "一晩", level: 600, part: "副詞" },
	{ word: "particularly", meaning: "特に", level: 600, part: "副詞" },
	{ word: "aspect", meaning: "側面", level: 600, part: "名詞" },
	{ word: "hesitate", meaning: "ためらう", level: 600, part: "動詞" },
	{ word: "involved", meaning: "関わっている", level: 600, part: "形容詞" },
	{ word: "regularly", meaning: "定期的に", level: 600, part: "副詞" },
	{ word: "scholarship", meaning: "奨学金", level: 600, part: "名詞" },
	{ word: "shortly", meaning: "まもなく", level: 600, part: "副詞" },
	{ word: "automobile", meaning: "自動車", level: 600, part: "名詞" },

	// -------------------------
	// 301〜400の単語
	// -------------------------
	{ word: "deposit", meaning: "頭金、預金", level: 600, part: "名詞" },
	{ word: "contain", meaning: "含む", level: 600, part: "動詞" },
	{ word: "content", meaning: "内容", level: 600, part: "名詞" },
	{ word: "proof", meaning: "証明", level: 600, part: "名詞" },
	{ word: "affect", meaning: "影響する", level: 600, part: "動詞" },
	{ word: "recognize", meaning: "認識する", level: 600, part: "動詞" },
	{ word: "represent", meaning: "代表する", level: 600, part: "動詞" },
	{ word: "transfer", meaning: "転勤させる、移す", level: 600, part: "動詞" },
	{ word: "anniversary", meaning: "記念日", level: 600, part: "名詞" },
	{ word: "automatically", meaning: "自動的に", level: 600, part: "副詞" },
	{ word: "capacity", meaning: "容量", level: 600, part: "名詞" },
	{ word: "destination", meaning: "目的地", level: 600, part: "名詞" },
	{ word: "grant", meaning: "補助金", level: 600, part: "名詞" },
	{ word: "publish", meaning: "出版する", level: 600, part: "動詞" },
	{ word: "accompany", meaning: "同行する", level: 600, part: "動詞" },
	{ word: "economic", meaning: "経済の", level: 600, part: "形容詞" },
	{ word: "extremely", meaning: "非常に", level: 600, part: "副詞" },
	{ word: "institution", meaning: "機関", level: 600, part: "名詞" },
	{ word: "accurate", meaning: "正確な", level: 600, part: "形容詞" },
	{ word: "compete", meaning: "競争する", level: 600, part: "動詞" },
	{ word: "emphasize", meaning: "強調する", level: 600, part: "動詞" },
	{ word: "aware", meaning: "気づいている", level: 600, part: "形容詞" },
	{ word: "crowded", meaning: "混雑した", level: 600, part: "形容詞" },
	{ word: "praise", meaning: "褒める", level: 600, part: "動詞" },
	{ word: "valuable", meaning: "貴重な", level: 600, part: "形容詞" },
	{ word: "explore", meaning: "探索する", level: 600, part: "動詞" },
	{ word: "found", meaning: "設立する", level: 600, part: "動詞" },
	{ word: "function", meaning: "機能", level: 600, part: "名詞" },
	{ word: "impact", meaning: "影響", level: 600, part: "名詞" },
	{ word: "amazing", meaning: "驚くべき", level: 600, part: "形容詞" },
	{ word: "assure", meaning: "保証する", level: 600, part: "動詞" },
	{ word: "cooperation", meaning: "協力", level: 600, part: "名詞" },
	{ word: "popularity", meaning: "人気", level: 600, part: "副詞" },
	{ word: "permit", meaning: "許可する", level: 600, part: "動詞" },
	{ word: "solve", meaning: "解決する", level: 600, part: "動詞" },
	{ word: "vote", meaning: "投票する", level: 600, part: "動詞" },
	{ word: "crop", meaning: "作物", level: 600, part: "名詞" },
	{ word: "neighborhood", meaning: "近所", level: 600, part: "名詞" },
	{ word: "permanently", meaning: "永久に", level: 600, part: "副詞" },
	{ word: "regret", meaning: "後悔する", level: 600, part: "動詞" },
	{ word: "slightly", meaning: "わずかに", level: 600, part: "副詞" },
	{ word: "complicated", meaning: "複雑な", level: 600, part: "形容詞" },
	{ word: "factor", meaning: "要因", level: 600, part: "名詞" },
	{ word: "favorable", meaning: "好意的な", level: 600, part: "形容詞" },
	{ word: "guarantee", meaning: "保証する", level: 600, part: "動詞" },
	{ word: "mechanical", meaning: "機械の", level: 600, part: "形容詞" },
	{ word: "priority", meaning: "優先事項", level: 600, part: "名詞" },
	{ word: "relatively", meaning: "比較的", level: 600, part: "副詞" },
	{ word: "resource", meaning: "資源", level: 600, part: "名詞" },
	{ word: "shuttle", meaning: "定期往復便", level: 600, part: "名詞" },
	{ word: "divide", meaning: "分ける", level: 600, part: "動詞" },
	{ word: "native", meaning: "地元の", level: 600, part: "形容詞" },
	{ word: "afford", meaning: "〜する余裕がある", level: 600, part: "動詞" },
	{ word: "income", meaning: "収入", level: 600, part: "名詞" },
	{ word: "occur", meaning: "起こる", level: 600, part: "動詞" },
	{ word: "saving", meaning: "節約", level: 600, part: "名詞" },
	{ word: "findings", meaning: "調査結果", level: 600, part: "名詞" },
	{ word: "locate", meaning: "見つける", level: 600, part: "動詞" },
	{ word: "postpone", meaning: "延期する", level: 600, part: "動詞" },
	{ word: "preserve", meaning: "保存する", level: 600, part: "動詞" },
	{ word: "prove", meaning: "証明する", level: 600, part: "動詞" },
	{ word: "exact", meaning: "正確な", level: 600, part: "形容詞" },
	{ word: "gain", meaning: "得る", level: 600, part: "動詞" },
	{ word: "labor", meaning: "労働", level: 600, part: "名詞" },
	{ word: "regard", meaning: "見なす", level: 600, part: "動詞" },
	{ word: "closely", meaning: "密接に", level: 600, part: "副詞" },
	{ word: "deserve", meaning: "値する", level: 600, part: "動詞" },
	{ word: "identify", meaning: "特定する", level: 600, part: "動詞" },
	{ word: "loyal", meaning: "忠実な", level: 600, part: "形容詞" },
	{ word: "promising", meaning: "有望な", level: 600, part: "形容詞" },
	{ word: "stress", meaning: "強調する", level: 600, part: "動詞" },
	{ word: "analyze", meaning: "分析する", level: 600, part: "動詞" },
	{ word: "commission", meaning: "委員会", level: 600, part: "名詞" },
	{ word: "committed", meaning: "献身的な", level: 600, part: "形容詞" },
	{ word: "comparison", meaning: "比較", level: 600, part: "名詞" },
	{ word: "component", meaning: "部品", level: 600, part: "名詞" },
	{ word: "enable", meaning: "可能にする", level: 600, part: "動詞" },
	{ word: "enjoyable", meaning: "楽しい", level: 600, part: "形容詞" },
	{ word: "existing", meaning: "既存の", level: 600, part: "形容詞" },
	{ word: "flyer", meaning: "チラシ", level: 600, part: "名詞" },
	{ word: "proceed", meaning: "進む", level: 600, part: "動詞" },
	{ word: "prevent", meaning: "防ぐ", level: 600, part: "動詞" },
	{ word: "alike", meaning: "似ている", level: 600, part: "形容詞" },
	{ word: "appoint", meaning: "指名する", level: 600, part: "動詞" },
	{ word: "connection", meaning: "つながり", level: 600, part: "名詞" },
	{ word: "eager", meaning: "熱心な", level: 600, part: "形容詞" },
	{ word: "ease", meaning: "容易さ", level: 600, part: "名詞" },
	{ word: "fairly", meaning: "かなり", level: 600, part: "副詞" },
	{ word: "absolutely", meaning: "絶対に", level: 600, part: "副詞" },
	{ word: "atmosphere", meaning: "雰囲気", level: 600, part: "名詞" },
	{ word: "calculate", meaning: "計算する", level: 600, part: "動詞" },
	{ word: "contrast", meaning: "対照", level: 600, part: "名詞" },
	{ word: "monitor", meaning: "監視する", level: 600, part: "動詞" },
	{ word: "occasionally", meaning: "たまに", level: 600, part: "副詞" },
	{ word: "practical", meaning: "実用的な", level: 600, part: "形容詞" },
	{ word: "serious", meaning: "真剣な", level: 600, part: "形容詞" },
	{ word: "strength", meaning: "強さ", level: 600, part: "名詞" },
	{ word: "equally", meaning: "等しく", level: 600, part: "副詞" },
	{ word: "import", meaning: "輸入する", level: 600, part: "動詞" },
	{ word: "informal", meaning: "非公式の", level: 600, part: "形容詞" }
];

// 自動で 1 〜 200 の id を付与する
const wordsData = rawWordsData.map((item, index) => {
	return { ...item, id: index + 1 };
});

let currentQuizSet = [];
let currentIndex = 0;
let startTime = 0;
let timerId = null;
let animationFrameId = null;
let clearStats = {};
let wrongStats = {};

function loadStats() {
	const saveData = localStorage.getItem("toeicWordStats");
	if (saveData) {
		clearStats = JSON.parse(saveData);
	} else {
		clearStats = {};
	}
	const wrongData = localStorage.getItem("toeicWrongStats");
	if (wrongData) wrongStats = JSON.parse(wrongData);
}

function saveStats() {
	localStorage.setItem("toeicWordStats", JSON.stringify(clearStats));
	localStorage.setItem("toeicWrongStats", JSON.stringify(wrongStats));
}

function startApp(mode) {
	let targetWords = [];

	if (mode === 'all') {
		targetWords = [...wordsData];
	} else if (mode === 'uncleared') {
		targetWords = wordsData.filter(w => !clearStats[w.word] || clearStats[w.word] === 0);
	} else if (mode === 'block_1_100') {
		targetWords = wordsData.filter(w => w.id >= 1 && w.id <= 100);
	} else if (mode === 'block_101_200') {
		targetWords = wordsData.filter(w => w.id >= 101 && w.id <= 200);
	} else if (mode === 'block_201_300') {
		targetWords = wordsData.filter(w => w.id >= 201 && w.id <= 300);
	} else if (mode === 'block_301_400') {
		targetWords = wordsData.filter(w => w.id >= 301 && w.id <= 400);
	} else if (mode === 'level_600') {
		targetWords = wordsData.filter(w => w.level === 600);
	} else if (mode === 'weakness') {
		// wrongStatsに記録がある単語だけを抽出
		targetWords = wordsData.filter(w => wrongStats[w.word] && wrongStats[w.word] > 0);
	}

	if (targetWords.length === 0) {
		alert("このモードで出題できる単語がありません！（全てクリア済みなど）");
		return;
	}

	document.getElementById("startScreen").style.display = "none";
	document.getElementById("listScreen").style.display = "none";
	document.getElementById("quizScreen").style.display = "block";

	currentQuizSet = targetWords.sort(() => 0.5 - Math.random()).slice(0, 10);
	currentIndex = 0;
	showNextQuestion();
}

function returnToTitle() {
	document.getElementById("startScreen").style.display = "block";
	document.getElementById("quizScreen").style.display = "none";
	resetVisuals();
}

function showNextQuestion() {
	resetVisuals();

	if (currentIndex >= currentQuizSet.length) {
		document.getElementById("word").innerText = "お疲れ様でした！🎉";
		document.getElementById("choices").innerHTML = `<button class="btn" onclick="returnToTitle()">タイトルに戻る</button>`;
		document.getElementById("timerBar").style.width = "0%";
		return;
	}

	const currentWord = currentQuizSet[currentIndex];
	const clearCount = clearStats[currentWord.word] || 0;
	// リスト番号（No.X）も一緒に表示するようにしました
	document.getElementById("word").innerText = `No. ${currentWord.id}\n${currentWord.word}\n(クリア: ${clearCount}回)`;

	const choices = generateChoices(currentWord.meaning);
	const choicesContainer = document.getElementById("choices");
	choicesContainer.innerHTML = "";

	choices.forEach(choice => {
		const btn = document.createElement("button");
		btn.className = "btn";
		btn.innerText = choice;
		btn.onclick = () => answerQuestion(choice, currentWord.meaning, currentWord.word);
		choicesContainer.appendChild(btn);
	});

	startTime = Date.now();
	updateTimerGauge();

	timerId = setTimeout(() => {
		handleTimeOut(currentWord.meaning);
	}, 3000);
}

function updateTimerGauge() {
	const elapsed = Date.now() - startTime;
	const remainingPercent = Math.max(0, 100 - (elapsed / 3000) * 100);

	const timerBar = document.getElementById("timerBar");
	timerBar.style.width = remainingPercent + "%";

	if (elapsed > 1000) {
		timerBar.style.backgroundColor = "#ffb74d";
	} else {
		timerBar.style.backgroundColor = "#4caf50";
	}

	if (remainingPercent > 0) {
		animationFrameId = requestAnimationFrame(updateTimerGauge);
	}
}

function generateChoices(correctMeaning) {
	const allMeanings = wordsData.map(w => w.meaning);
	const wrongChoices = allMeanings.filter(m => m !== correctMeaning).sort(() => 0.5 - Math.random()).slice(0, 3);
	return [correctMeaning, ...wrongChoices].sort(() => 0.5 - Math.random());
}

function answerQuestion(selected, correct, wordText) {
	clearTimeout(timerId);
	cancelAnimationFrame(animationFrameId);

	const elapsedTime = (Date.now() - startTime) / 1000;
	const card = document.getElementById("quizScreen");
	const feedback = document.getElementById("feedback");

	disableChoices();

	let nextDelay = 800;

	if (selected === correct) {
		if (elapsedTime <= 1.0) {
			feedback.innerText = `💮クリア！ (${elapsedTime.toFixed(2)}秒)`;
			feedback.style.color = "#2e7d32";
			card.classList.add("bg-fast-clear");

			if (!clearStats[wordText]) {
				clearStats[wordText] = 0;
			}
			clearStats[wordText]++;
			saveStats();

		} else {
			feedback.innerText = `⭕ 正解 (${elapsedTime.toFixed(2)}秒)`;
			feedback.style.color = "#f57f17";
			card.classList.add("bg-normal-correct");
		}
		if (wrongStats[wordText]) {
			delete wrongStats[wordText];
		}
		saveStats();
	} else {
		feedback.innerText = "❌ 不正解";
		feedback.style.color = "#c62828";
		card.classList.add("bg-wrong");

		highlightButton(selected, "#ffcdd2");
		highlightButton(correct, "#a5d6a7", true);

		if (!wrongStats[wordText]) wrongStats[wordText] = 0;
		wrongStats[wordText]++;
		saveStats();

		nextDelay = 1500;
	}

	setTimeout(() => {
		currentIndex++;
		showNextQuestion();
	}, nextDelay);
}

function handleTimeOut(correct, wordText) {
	cancelAnimationFrame(animationFrameId);
	disableChoices();

	const card = document.getElementById("quizScreen");
	const feedback = document.getElementById("feedback");

	feedback.innerText = "⏳ 3秒経過タイムアウト";
	feedback.style.color = "#c62828";
	card.classList.add("bg-wrong");

	highlightButton(correct, "#a5d6a7", true);

	if (!wrongStats[wordText]) wrongStats[wordText] = 0;
	wrongStats[wordText]++;
	saveStats();

	setTimeout(() => {
		currentIndex++;
		showNextQuestion();
	}, 1500);
}

function highlightButton(text, color, isCorrect = false) {
	const buttons = document.querySelectorAll("#choices .btn");
	buttons.forEach(btn => {
		if (btn.innerText === text) {
			btn.style.backgroundColor = color;
			if (isCorrect) {
				btn.style.fontWeight = "bold";
				btn.style.border = "2px solid #2e7d32";
			}
		}
	});
}

function resetVisuals() {
	const card = document.getElementById("quizScreen");
	card.className = "card";
	document.getElementById("feedback").innerText = "";
	document.getElementById("timerBar").style.backgroundColor = "#4caf50";
}

function disableChoices() {
	const buttons = document.querySelectorAll("#choices .btn");
	buttons.forEach(btn => btn.disabled = true);
}

function showListScreen() {
	document.getElementById("startScreen").style.display = "none";
	document.getElementById("quizScreen").style.display = "none";
	document.getElementById("listScreen").style.display = "block";

	let clearedCount = 0;
	let listHTML = "<ul>";

	wordsData.forEach(w => {
		const count = clearStats[w.word] || 0;
		if (count > 0) {
			clearedCount++;
		}
		listHTML += `<li><strong>No. ${w.id} ${w.word}</strong> (${w.meaning})<br>クリア: ${count}回</li>`;
	});
	listHTML += "</ul>";

	const clearRate = Math.floor((clearedCount / wordsData.length) * 100);

	document.getElementById("clearRateText").innerText = `全体のクリア率: ${clearRate}% (${clearedCount}/${wordsData.length}語)`;
	document.getElementById("clearRateBar").style.width = clearRate + "%";
	document.getElementById("wordList").innerHTML = listHTML;
}

function returnToTitleFromList() {
	document.getElementById("listScreen").style.display = "none";
	document.getElementById("startScreen").style.display = "block";
}

loadStats();