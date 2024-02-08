import React from "react"
import AudioReactRecorder, { RecordState } from "audio-react-recorder"

export const App = () => {
	const [recordState, setRecordState] = useState(null)

	return(
		<div>
			<AudioReactRecorder state={recordState} />
		</div>
	)
}


