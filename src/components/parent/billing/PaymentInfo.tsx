import { BellAlertIcon } from '@heroicons/react/24/outline';
import React from 'react';



interface PaymentInfoProps {
  feeAmount: string;
  nextPaymentDate: string;
  hasOutstandingPayment?: boolean;
  onPayNow?: () => void;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  feeAmount,
  nextPaymentDate,
  hasOutstandingPayment = true,
  onPayNow,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-gray-800 font-medium">Current School fee</h3>
            <span className="text-gray-500 text-sm">Monthly</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">
            Next payment {nextPaymentDate}
          </p>
        </div>
        <div className="text-right">
          <span className="text-gray-900 font-bold text-3xl">
            {feeAmount}
          </span>
          <span className="text-gray-500 text-lg">/mo</span>
        </div>
      </div>

      {hasOutstandingPayment && (
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BellAlertIcon className="text-red-500 w-6 h-6" />
              <span className="text-gray-800 font-medium">Out standing payment</span>
            </div>
            <div className="flex-1 mx-4">
              <p className="text-gray-600 text-sm">Please pay the outstanding amount</p>
            </div>
            <button
              onClick={onPayNow}
              className="bg-red-500 text-white rounded-full px-4 py-1 text-sm font-medium"
            >
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentInfo;
