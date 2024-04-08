from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from Ml import make_prediction

app = Flask(__name__)

@app.route('/fapi/predict', methods=['POST'])
def predict():
    try:
        # Get the patient data from the request

        data = request.get_json()
        # df = pd.DataFrame(data)
        print("********************************")
        # print(data)
        new_data = {
    'Age': [data["age"]],
    'Gender': [data["gender"]],
    'Heart rate': [data["heartRate"]],
    'Systolic blood pressure': [data["systolicBP"]],
    'Diastolic blood pressure': [data["diastolicBP"]],
    'Blood sugar': [data["bloodSugar"]],
    'CK-MB': [data["ckMb"]],
    'Troponin': [data["troponin"]],
}
        result = make_prediction(new_data)
        print("Prediction:", result)
        print("********************************")

        prediction = {
            'message': result[0]
        }


        # Return the dummy prediction
        return jsonify(prediction)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
