from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained ML model
model = joblib.load('./Model/heart_attack_prediction_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the patient data from the request
        data = request.get_json()

        # Extract features from the patient data
        features = [
            data['age'],
            data['gender'],
            data['heartRate'],
            data['systolicBP'],
            data['diastolicBP'],
            data['bloodSugar'],
            data['ckMb'],
            data['troponin']
        ]

        # Reshape the features into a 2D array as expected by the model
        features = np.array(features).reshape(1, -1)

        # Make prediction
        prediction = model.predict_proba(features)

        # Return the predicted probability of heart attack
        return jsonify({'probability': prediction[0][1]})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
