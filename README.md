# 🚀 Survey Automation System - Vercel Deployment

This project automatically distributes 161 survey responses over 2 weeks using Vercel serverless functions and cron jobs.

## 📁 Project Structure

```
survey-vercel/
├── public/                 # Static files served by Vercel
│   ├── index.html         # Main survey site
│   ├── styles.css         # Survey styles
│   ├── script.js          # Survey functionality
│   └── Umfrage_Daten_Levitea.csv  # Survey data
├── api/                   # Vercel serverless functions
│   └── cron-submit.js     # Automated submission function
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## 🌍 Features

- **Automatic Distribution**: 161 responses spread over 2 weeks
- **Timezone Awareness**: German (10am-10pm) and Japanese (10am-10pm) business hours
- **Video Mapping**: Correct video versions for each country
- **Formspark Integration**: Automatic submissions to your endpoint
- **Cron Jobs**: Runs every 6 hours automatically

## 🚀 Deployment Steps

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Deploy to Vercel
```bash
vercel
```

### 4. Set Up Cron Jobs
The cron job is configured in `vercel.json` to run every 6 hours:
```json
"crons": [
  {
    "path": "/api/cron-submit",
    "schedule": "0 */6 * * *"
  }
]
```

## ⏰ How It Works

### Cron Job Schedule
- **Runs every 6 hours** (00:00, 06:00, 12:00, 18:00 UTC)
- **Processes ~3-4 responses** per run
- **Respects business hours** for each country

### Business Hours
- **Germany**: 10:00 AM - 10:00 PM (UTC+1)
- **Japan**: 10:00 AM - 10:00 PM (UTC+9)

### Response Distribution
- **Day 1**: 12 responses
- **Day 2**: 8 responses
- **Day 3**: 15 responses
- **...and so on for 14 days**
- **Total**: Exactly 161 responses

## 📊 Monitoring

### Vercel Dashboard
- View function logs at [vercel.com/dashboard](https://vercel.com/dashboard)
- Monitor cron job execution
- Check function performance

### Manual Testing
Test the cron function manually:
```
https://your-project.vercel.app/api/cron-submit
```

## 🔧 Configuration

### Environment Variables
Set these in your Vercel dashboard:
- `FORMSPARK_ENDPOINT`: Your Formspark submission URL
- `LOG_LEVEL`: Logging level (debug, info, warn, error)

### Cron Job Timing
Modify `vercel.json` to change frequency:
- `0 */6 * * *` = Every 6 hours
- `0 */4 * * *` = Every 4 hours
- `0 */2 * * *` = Every 2 hours

## 📝 CSV Data Format

The system expects CSV data with these columns:
- `Alter` - Age
- `Geschlecht` - Gender
- `Wohnsitzland` - Country
- `Stimulus-Video` - Video version
- And other survey response fields

## 🚨 Important Notes

### Before Deployment
1. **Test locally** with `vercel dev`
2. **Verify CSV data** format
3. **Check Formspark endpoint** is correct
4. **Review business hours** logic

### After Deployment
1. **Monitor first few runs** for errors
2. **Check Formspark dashboard** for submissions
3. **Verify timezone handling** is correct
4. **Review logs** for any issues

## 🆘 Troubleshooting

### Common Issues
1. **Cron not running**: Check Vercel dashboard for errors
2. **Formspark errors**: Verify endpoint URL and format
3. **Timezone issues**: Check UTC offset calculations
4. **CSV parsing errors**: Verify file format and encoding

### Debug Mode
Enable debug logging by setting `LOG_LEVEL=debug` in Vercel environment variables.

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify CSV data format
3. Test Formspark endpoint manually
4. Review business hours logic

## 🎯 Success Criteria

The system is working correctly when:
- ✅ Responses are submitted every 6 hours
- ✅ German responses only during German business hours
- ✅ Japanese responses only during Japanese business hours
- ✅ All 161 responses are submitted within 2 weeks
- ✅ Video versions match correctly for each country
- ✅ Data format matches your existing Formspark submissions

---

**Deploy and let it run automatically for 2 weeks!** 🚀 